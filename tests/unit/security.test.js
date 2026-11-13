'use strict';
/* Unit tests: password hashing, login tokens and file checks (server/security.js, server/storage.js). No database. */
const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('crypto');

process.env.JWT_SECRET = 'unit-test-secret-unit-test-secret-1234';
const sec = require('../../server/security');
const storage = require('../../server/storage');

const b64url = (o) => Buffer.from(JSON.stringify(o)).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
const sign = (head, body, key) => crypto.createHmac('sha256', key).update(head + '.' + body).digest('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

test('Mật khẩu: băm có salt riêng, không lưu dạng chữ thường', async () => {
  const h1 = await sec.hashPassword('secret123');
  const h2 = await sec.hashPassword('secret123');
  assert.match(h1, /^scrypt\$/);
  assert.ok(!h1.includes('secret123'), 'plain password must not appear in the hash');
  assert.notEqual(h1, h2, 'same password, different salt → different hash');
  assert.equal(await sec.verifyPassword('secret123', h1), true);
  assert.equal(await sec.verifyPassword('secret124', h1), false);
  assert.equal(await sec.verifyPassword('secret123', 'not-a-hash'), false);
  assert.equal(await sec.verifyPassword('secret123', null), false);
});

test('Token đăng nhập: hợp lệ, bị sửa, sai khóa, hết hạn', () => {
  const t = sec.signToken(42);
  assert.equal(sec.verifyToken(t), 42);
  const [h, b] = t.split('.');
  const now = Math.floor(Date.now() / 1000);
  // someone changes the user id inside the token
  const forgedBody = b64url({ sub: '1', iat: now, exp: now + 60 });
  assert.equal(sec.verifyToken(h + '.' + forgedBody + '.' + t.split('.')[2]), null);
  // signed with a different secret
  assert.equal(sec.verifyToken(h + '.' + b + '.' + sign(h, b, 'another-secret-another-secret-12345')), null);
  // expired, but correctly signed
  const oldBody = b64url({ sub: '42', iat: now - 100, exp: now - 1 });
  assert.equal(sec.verifyToken(h + '.' + oldBody + '.' + sign(h, oldBody, process.env.JWT_SECRET)), null);
  // "alg: none" trick
  const noneHead = b64url({ alg: 'none', typ: 'JWT' });
  assert.equal(sec.verifyToken(noneHead + '.' + b + '.'), null);
  // garbage
  for (const x of ['', 'abc', 'a.b', 'a.b.c', null, undefined]) assert.equal(sec.verifyToken(x), null);
});

test('Thiếu JWT_SECRET hoặc quá ngắn thì báo lỗi rõ ràng', () => {
  const keep = process.env.JWT_SECRET;
  try {
    process.env.JWT_SECRET = 'short';
    assert.throws(() => sec.signToken(1), (e) => e.code === 'PAWPASS_NO_JWT');
    delete process.env.JWT_SECRET;
    assert.throws(() => sec.assertConfigured(), (e) => e.code === 'PAWPASS_NO_JWT');
  } finally { process.env.JWT_SECRET = keep; }
});

test('Tệp tải lên: kiểm tra chữ ký nội dung, không tin đuôi tệp', () => {
  const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0]);
  const JPG = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0]);
  const PDF = Buffer.from('%PDF-1.4\n');
  assert.equal(storage.sniff('png', PNG), true);
  assert.equal(storage.sniff('jpg', JPG), true);
  assert.equal(storage.sniff('pdf', PDF), true);
  assert.equal(storage.sniff('pdf', PNG), false, 'a PNG renamed to .pdf is rejected');
  assert.equal(storage.sniff('png', Buffer.from('hello')), false);
  assert.equal(storage.sniff('exe', PNG), false);
});

test('Tên tệp an toàn khi lưu: bỏ dấu, ký tự lạ và đường dẫn', () => {
  assert.equal(storage.safeName('Sổ Tiêm Phòng (Mochi).PDF'), 'so-tiem-phong-mochi-.pdf');
  assert.ok(!storage.safeName('../../etc/passwd').includes('/'));
  assert.ok(!storage.safeName('../../etc/passwd').startsWith('.'));
  assert.equal(storage.safeName(''), 'file');
});
