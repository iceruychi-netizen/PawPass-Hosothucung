'use strict';
/* Unit tests: shared validation rules (public/js/validators.js). No server, no database. */
const test = require('node:test');
const assert = require('node:assert/strict');
const VAL = require('../../public/js/validators');
const { V, hasErr } = VAL;

const ok = (e) => assert.equal(hasErr(e), false, 'expected no errors, got ' + JSON.stringify(e));
const bad = (e, field) => assert.ok(e[field], 'expected an error on "' + field + '", got ' + JSON.stringify(e));

// Freeze "today" so the date rules do not depend on when the tests run.
VAL.clock.today = () => '2026-11-13';

test('Đăng ký: hợp lệ và các lỗi thường gặp', () => {
  ok(V.register({ name: 'An', email: 'an@example.com', password: 'secret1', confirm: 'secret1' }));
  bad(V.register({ name: '', email: 'an@example.com', password: 'secret1' }), 'name');
  bad(V.register({ name: 'An', email: 'an@', password: 'secret1' }), 'email');
  bad(V.register({ name: 'An', email: 'an example@x.com', password: 'secret1' }), 'email');
  bad(V.register({ name: 'An', email: 'an@example.com', password: '12345' }), 'password');
  bad(V.register({ name: 'An', email: 'an@example.com', password: 'x'.repeat(129) }), 'password');
  bad(V.register({ name: 'An', email: 'an@example.com', password: 'secret1', confirm: 'secret2' }), 'confirm');
  bad(V.register({ name: 'x'.repeat(61), email: 'an@example.com', password: 'secret1' }), 'name');
});

test('Đăng nhập và đổi mật khẩu', () => {
  ok(V.login({ email: 'an@example.com', password: 'x' }));
  bad(V.login({ email: 'an@example.com', password: '' }), 'password');
  ok(V.password({ current_password: 'old', new_password: 'newpass', confirm: 'newpass' }));
  bad(V.password({ current_password: '', new_password: 'newpass' }), 'current_password');
  bad(V.password({ current_password: 'old', new_password: '123' }), 'new_password');
  bad(V.password({ current_password: 'old', new_password: 'newpass', confirm: 'other' }), 'confirm');
});

test('Thú cưng: loài, giới tính, cân nặng, ngày sinh', () => {
  const pet = { name: 'Mochi', species: 'Mèo', gender: 'Cái' };
  ok(V.pet(pet));
  ok(V.pet(Object.assign({}, pet, { weight: '4,5', date_of_birth: '2024-02-29' })));
  bad(V.pet(Object.assign({}, pet, { name: '' })), 'name');
  bad(V.pet(Object.assign({}, pet, { species: 'Rồng' })), 'species');
  bad(V.pet(Object.assign({}, pet, { gender: 'Khác' })), 'gender');
  bad(V.pet(Object.assign({}, pet, { weight: '-1' })), 'weight');
  bad(V.pet(Object.assign({}, pet, { weight: '0' })), 'weight');
  bad(V.pet(Object.assign({}, pet, { weight: 'abc' })), 'weight');
  bad(V.pet(Object.assign({}, pet, { weight: '201' })), 'weight');
  bad(V.pet(Object.assign({}, pet, { date_of_birth: '2026-11-14' })), 'date_of_birth'); // tomorrow
  bad(V.pet(Object.assign({}, pet, { date_of_birth: '2025-02-29' })), 'date_of_birth'); // not a real day
  bad(V.pet(Object.assign({}, pet, { date_of_birth: '1979-12-31' })), 'date_of_birth');
  bad(V.pet(Object.assign({}, pet, { notes: 'x'.repeat(1001) })), 'notes');
  bad(V.pet(Object.assign({}, pet, { breed: { evil: true } })), 'breed'); // objects are rejected
});

test('Sức khỏe và tiêm phòng: bắt buộc ngày, không ở tương lai', () => {
  ok(V.health({ examination_date: '2026-11-13', reason: 'Khám định kỳ' }));
  bad(V.health({ reason: 'Khám' }), 'examination_date');
  bad(V.health({ examination_date: '2026-12-01', reason: 'Khám' }), 'examination_date');
  bad(V.health({ examination_date: '2026-11-01', reason: '' }), 'reason');
  ok(V.vacc({ vaccine_name: 'Dại', vaccination_date: '2026-10-01', dose: 'Mũi 1' }));
  bad(V.vacc({ vaccine_name: '', vaccination_date: '2026-10-01', dose: 'Mũi 1' }), 'vaccine_name');
  bad(V.vacc({ vaccine_name: 'Dại', vaccination_date: '2026-10-01', dose: '' }), 'dose');
});

test('Tài liệu: chỉ JPG/PNG/PDF, tối đa 4 MB, không rỗng', () => {
  const MB = VAL.MB;
  ok(V.doc({ file: { name: 'so-tiem.pdf', type: 'application/pdf', size: MB } }));
  ok(V.doc({ file: { name: 'ANH.JPEG', type: 'image/jpeg', size: 4 * MB } }));
  bad(V.doc({}), 'file');
  bad(V.doc({ file: { name: 'virus.exe', type: 'application/octet-stream', size: 10 } }), 'file');
  bad(V.doc({ file: { name: 'fake.pdf', type: 'text/plain', size: 10 } }), 'file'); // wrong MIME
  bad(V.doc({ file: { name: 'big.pdf', type: 'application/pdf', size: 4 * MB + 1 } }), 'file');
  bad(V.doc({ file: { name: 'empty.png', type: 'image/png', size: 0 } }), 'file');
  bad(V.doc({ file: { name: 'a.png', type: 'image/png', size: 1 }, description: 'x'.repeat(256) }), 'description');
});

test('Ảnh thú cưng / ảnh đại diện: JPG/PNG, tối đa 2 MB', () => {
  assert.equal(VAL.image({ name: 'a.png', type: 'image/png', size: 1000 }), '');
  assert.match(VAL.image({ name: 'a.gif', type: 'image/gif', size: 1000 }), /JPG hoặc PNG/);
  assert.match(VAL.image({ name: 'a.jpg', type: 'image/jpeg', size: 2 * VAL.MB + 1 }), /2 MB/);
});

test('Hàm tiện ích: ngày hợp lệ, đuôi tệp, cân nặng có dấu phẩy', () => {
  assert.equal(VAL.validDate('2024-02-29'), true);
  assert.equal(VAL.validDate('2023-02-29'), false);
  assert.equal(VAL.validDate('13/11/2026'), false);
  assert.equal(VAL.ext('Giấy Tờ.PDF'), 'pdf');
  assert.equal(VAL.ext('noext'), '');
  assert.equal(VAL.parseWeight(' 3,25 '), 3.25);
});
