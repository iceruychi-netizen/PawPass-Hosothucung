# Phân công công việc — PawPass

Tài liệu này ghi rõ **ai phụ trách phần nào**, **việc cần làm tiếp** và **quy trình làm việc chung** của nhóm.
Mỗi thành viên điền tài khoản GitHub của mình vào bảng bên dưới.

> Web đang chạy: https://pawpass-hosothucung-web.vercel.app/
> Tài liệu chi tiết cách chạy và deploy: xem [README.md](README.md)

---

## 1. Thành viên và phần phụ trách

| # | Thành viên | GitHub | Phần phụ trách | Thư mục / file chính |
| --- | --- | --- | --- | --- |
| 1 | Hữu Triết | @... | Giao diện: các màn hình & hình ảnh | `public/index.html`, `public/assets/` |
| 2 | Duy Huy | @... | Phong cách CSS, cấu hình deploy & test giao diện | `public/css/app.css`, `tests/ui/run-ui.js`, `vercel.json`, `package.json`, `.gitignore`, `.env.example` |
| 3 | Thế Dũng | @... | Logic frontend | `public/js/app.js`, `public/js/runtime.js` |
| 4 | Thành Đạt | @... | Backend API, bảo mật & README | `server/app.js`, `server/http.js`, `server/security.js`, `server/storage.js`, `server/local.js`, `api/index.js`, `README.md` |
| 5 | Duy Quang | @... | Database, kiểm tra dữ liệu & test API | `db/schema.sql`, `server/schema.js`, `server/db.js`, `server/env.js`, `scripts/`, `public/js/validators.js`, `tests/api.test.js` |

**Người phụ trách** một phần là người hiểu rõ phần đó nhất, trình bày phần đó, và **review** mọi thay đổi chạm vào phần đó.

---

## 2. Việc cần làm tiếp

Mỗi việc dưới đây tạo thành **1 Issue** trên GitHub (tab **Issues → New issue**), gán người làm ở ô **Assignees**.

### Người 1 (Hữu Triết) — Giao diện
- [ ] Thêm màn hình thông báo khi địa chỉ không tồn tại (ví dụ `#/abc`), có nút quay về trang chính.
- [ ] Hiện thông báo thân thiện khi mất mạng (không gọi được API).
- [ ] Kiểm tra lại toàn bộ chữ tiếng Việt trên các màn hình (chính tả, dấu).

### Người 2 (Duy Huy) — CSS, cấu hình & test giao diện
- [ ] Xóa file `app.css` thừa ở thư mục ngoài cùng repo (bản đúng nằm ở `public/css/app.css`).
- [ ] Thêm GitHub Actions (`.github/workflows/test.yml`) tự chạy `npm test` mỗi khi có Pull Request.
- [ ] Chạy lại Lighthouse trên web chính, ghi điểm vào mục 5 của tài liệu này.

### Người 3 (Thế Dũng) — Logic frontend
- [ ] Khi phiên đăng nhập hết hạn (API trả 401), hiện thông báo "Phiên đăng nhập đã hết hạn" rồi mới chuyển về trang đăng nhập.
- [ ] Chặn bấm nút Lưu nhiều lần liên tiếp khi đang gửi dữ liệu.

### Người 4 (Thành Đạt) — Backend & bảo mật
- [ ] Giới hạn đăng nhập sai: sau 5 lần sai trong 15 phút thì tạm khóa email đó, trả lỗi 429.
- [ ] Cập nhật mục **Bảo mật** và **Giới hạn đã biết** trong `README.md` sau khi làm xong.

### Người 5 (Duy Quang) — Database & test API
- [ ] Viết thêm test cho giới hạn đăng nhập sai (phối hợp với Người 4).
- [ ] Viết thêm test: cập nhật thú cưng với dữ liệu sai (cân nặng âm, ngày sinh ở tương lai) phải trả lỗi 400.
- [ ] Kiểm tra `db/schema.sql` và `server/schema.js` luôn giống nhau.

> Ngoài phạm vi dự án, **không làm**: bác sĩ thú y, đặt lịch, thanh toán, chợ mua bán.

---

## 3. Quy trình làm việc

Mọi thay đổi đi theo 5 bước: **Issue → Nhánh → Commit → Pull Request → Review & Merge**.
**Không ai đẩy code thẳng lên nhánh `main`.**

### Bước 1 — Lấy code về máy (làm một lần)
GitHub Desktop: **File → Clone repository** → chọn `PawPass-Hosothucung`.

### Bước 2 — Tạo nhánh riêng cho mỗi việc
GitHub Desktop: **Current branch → New branch**. Đặt tên theo mẫu:

```
phan-<số người>-<việc ngắn gọn>
ví dụ: phan-4-gioi-han-dang-nhap
```

Trước khi tạo nhánh, bấm **Fetch origin / Pull** để có code mới nhất.

### Bước 3 — Commit nhỏ, mô tả rõ
Mỗi commit làm **một việc**, viết bằng tiếng Việt, bắt đầu bằng động từ:

| Nên | Không nên |
| --- | --- |
| `Thêm giới hạn 5 lần đăng nhập sai` | `update` |
| `Sửa lỗi nút Lưu bấm được 2 lần` | `sửa code` |
| `Thêm test cân nặng âm trả về 400` | `bản chỉnh sửa` |

### Bước 4 — Mở Pull Request
Bấm **Push origin → Create Pull Request**. Trong phần mô tả ghi:

```
Làm gì: <tóm tắt 1–2 câu>
Đã kiểm tra: <đã chạy npm test / đã thử trên web xem trước>
Closes #<số issue>
```

Vercel tự tạo **link xem thử** cho mỗi Pull Request. Mở link đó để kiểm tra trước khi gộp.

### Bước 5 — Review rồi mới Merge
- **Người phụ trách phần bị sửa** (bảng mục 1) review: vào tab **Files changed**, đọc, góp ý, bấm **Approve**.
- Sửa xong góp ý → người review Approve → bấm **Merge pull request**.
- Vercel tự deploy bản mới lên web chính sau khi merge.

---

## 4. Quy tắc chung

1. **Không** đưa mật khẩu, `JWT_SECRET`, chuỗi kết nối database lên GitHub hay nhóm chat. Secret chỉ để trong **Vercel → Settings → Environment Variables** hoặc file `.env` trên máy mình (file này đã nằm trong `.gitignore`).
2. Chạy `npm test` trước khi mở Pull Request. Test đỏ thì không merge.
3. Sửa phần của người khác thì **tag người đó** vào Pull Request để họ review.
4. Gặp lỗi không tự sửa được: tạo Issue, dán ảnh chụp lỗi, tag người phụ trách phần đó.

---

## 5. Theo dõi tiến độ

| Việc | Người làm | Issue | Pull Request | Trạng thái |
| --- | --- | --- | --- | --- |
| Màn hình địa chỉ không tồn tại | Người 1 | #... | #... | ⬜ Chưa làm |
| Xóa `app.css` thừa + GitHub Actions | Người 2 | #... | #... | ⬜ Chưa làm |
| Thông báo hết phiên đăng nhập | Người 3 | #... | #... | ⬜ Chưa làm |
| Giới hạn đăng nhập sai | Người 4 | #... | #... | ⬜ Chưa làm |
| Test bổ sung | Người 5 | #... | #... | ⬜ Chưa làm |

Trạng thái: ⬜ Chưa làm · 🟨 Đang làm · 🟦 Chờ review · ✅ Đã merge

**Lighthouse (web chính):** Performance … · Accessibility … · Best Practices … · SEO … _(Người 2 cập nhật)_
