'use strict';
/* Unit tests: Sentry + Google Analytics config (server/monitor.js). A tiny local server stands in for Sentry. */
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('http');
const monitor = require('../../server/monitor');

test('Đọc DSN Sentry đúng định dạng, DSN sai thì bỏ qua', () => {
  assert.deepEqual(monitor.parseDsn('https://abc123@o42.ingest.sentry.io/7'), { key: 'abc123', url: 'https://o42.ingest.sentry.io/api/7/envelope/' });
  assert.equal(monitor.parseDsn(''), null);
  assert.equal(monitor.parseDsn('not a dsn'), null);
  assert.equal(monitor.parseDsn(undefined), null);
});

test('Đường dẫn gửi đi không chứa id cụ thể', () => {
  assert.equal(monitor.routeName('/pets/12/health-records'), '/pets/:id/health-records');
  assert.equal(monitor.routeName('/documents/5/download'), '/documents/:id/download');
});

test('Cấu hình công khai: chỉ trả mã GA và DSN hợp lệ', () => {
  const keep = { ...process.env };
  try {
    process.env.GA_MEASUREMENT_ID = 'G-ABC123XYZ';
    process.env.SENTRY_DSN = 'https://k@o1.ingest.sentry.io/2';
    assert.equal(monitor.publicConfig().gaId, 'G-ABC123XYZ');
    assert.equal(monitor.publicConfig().sentryDsn, 'https://k@o1.ingest.sentry.io/2');
    process.env.GA_MEASUREMENT_ID = '<script>alert(1)</script>';
    process.env.SENTRY_DSN = 'rác';
    assert.equal(monitor.publicConfig().gaId, null);
    assert.equal(monitor.publicConfig().sentryDsn, null);
  } finally { process.env = keep; }
});

test('Gửi lỗi máy chủ lên Sentry: đúng định dạng, không lộ dữ liệu', async () => {
  const got = [];
  const srv = http.createServer((req, res) => {
    let body = '';
    req.on('data', (c) => { body += c; });
    req.on('end', () => { got.push({ url: req.url, auth: req.headers['x-sentry-auth'], body }); res.end('{}'); });
  });
  await new Promise((ok) => srv.listen(0, ok));
  const keep = process.env.SENTRY_DSN;
  try {
    process.env.SENTRY_DSN = `http://publickey@127.0.0.1:${srv.address().port}/99`;
    const err = new Error('database exploded');
    const id = await monitor.captureException(err, { method: 'GET', path: '/pets/12', status: 500 });
    assert.match(id, /^[0-9a-f]{32}$/);
    assert.equal(got.length, 1);
    assert.equal(got[0].url, '/api/99/envelope/');
    assert.match(got[0].auth, /sentry_key=publickey/);
    const [, itemHeader, payload] = got[0].body.split('\n');
    assert.equal(JSON.parse(itemHeader).type, 'event');
    const event = JSON.parse(payload);
    assert.equal(event.exception.values[0].value, 'database exploded');
    assert.equal(event.transaction, 'GET /pets/:id');
    assert.ok(event.exception.values[0].stacktrace.frames.length > 0);
  } finally { process.env.SENTRY_DSN = keep; srv.close(); }
});

test('Không có DSN hoặc Sentry không trả lời: không làm hỏng API', async () => {
  const keep = process.env.SENTRY_DSN;
  try {
    delete process.env.SENTRY_DSN;
    assert.equal(await monitor.captureException(new Error('x')), null);
    process.env.SENTRY_DSN = 'http://k@127.0.0.1:1/5'; // không có ai nghe ở cổng 1
    assert.equal(await monitor.captureException(new Error('x')), null);
  } finally { if (keep === undefined) delete process.env.SENTRY_DSN; else process.env.SENTRY_DSN = keep; }
});
