# Self-Report — Final Project

---

## Thông tin cá nhân

| | |
|---|---|
| **Họ tên** | Nguyễn Hữu Triết |
| **MSSV** | 24090003 |
| **Nhóm** | PawPass |
| **Vai trò trong nhóm** | Leader — điều phối nhóm, làm việc với AI Coding Agent, deploy Vercel; phụ trách phần 1 (giao diện, hình ảnh, trang Giới thiệu / Liên hệ) |

---

## Task 1 — Planning & Setup

**Tuần:** Tuần 1, ngày 09/11 – 13/11

**Công việc đã làm:**

- Làm prototype Step 1 bằng Claude Design (09/11 – 11/11, nhiều vòng sửa) và viết tài liệu Step 2 (PRD, kiến trúc, ERD, API Docs) cùng AI (12/11).
- Lập kế hoạch Step 3, chia dự án thành 5 phần và phân công (`PHAN-CONG.md`, `PLAN.md`), soạn tài liệu đọc hiểu cho từng phần.
- Tạo repo GitHub, đưa phần giao diện lên đầu tiên; xử lý xung đột khi gộp code (merge conflict) trên GitHub Desktop. Nhóm làm trực tiếp trên `main`, chưa dùng nhánh riêng hay Pull Request.
- Sau bản chấm thử (25–26/11): lập kế hoạch phần việc bổ sung trên GitHub Milestones (M1–M4, mỗi mốc có hạn riêng) và tạo Issue giao việc cho từng thành viên; từ đây mỗi việc đi theo Issue → nhánh riêng → Pull Request.
- 26–27/11: điều phối các Pull Request của nhóm — review và Approve PR của bạn khác (#13, #15, #17, #19), merge sau khi có người Approve, sửa các PR bị lỗi (đổi nhánh đích PR #15, sửa link ảnh PR #19 và #20), xóa nhánh sau khi merge; cập nhật README lần cuối và đóng Issue #11.

**Bằng chứng đóng góp:**

- [`a735c4d`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/a735c4d) — đưa giao diện và hình ảnh lên repo
- [`3c64f7b`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/3c64f7b) — thêm PHAN-CONG.md, cập nhật README
- [`641a49f`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/641a49f) — gộp code khi bị xung đột
- [`4b37b3c`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/4b37b3c) — thêm PLAN.md, CLAUDE.md, unit test
- [Milestones M1–M4](https://github.com/iceruychi-netizen/PawPass-Hosothucung/milestones) · Issue giao việc [#7](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/7), [#8](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/8), [#9](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/9), [#10](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/10), [#11](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/11)
- Review / Approve: PR [#13](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/13), [#15](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/15), [#17](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/17), [#19](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/19) · README cuối: PR [#21](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/21)

**Khó khăn gặp phải:**

Lần đầu dùng GitHub theo nhóm: các bạn upload song song nên bị xung đột, có bạn upload nhầm thư mục; phải xem lại từng file để gộp đúng.

**Đánh giá bản thân:** 9/10

---

## Task 2 — UI Implementation

**Tuần:** Tuần 1–2, ngày 13/11 – 20/11

**Công việc đã làm:**

- Phần 1: `public/index.html` (các màn hình), `public/assets/` (ảnh minh họa WebP).
- Sửa lỗi giao diện khi chạy thật: màn hình giật khi rê chuột, lặp lại trang đăng nhập khi F5, ảnh tài liệu không hiện, màn hình chờ sau đăng nhập.
- Đợt bổ sung theo đề bài: trang Giới thiệu `public/gioi-thieu.html` và Liên hệ `public/lien-he.html` (Tailwind CSS), link từ ứng dụng.

**Bằng chứng đóng góp:**

- [`9725d89`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/9725d89) — sửa lỗi lặp đăng nhập
- [`80bcfc0`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/80bcfc0) — sửa lỗi lag
- [`24daa6e`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/24daa6e) — sửa thẻ tài liệu trống (tải lại ảnh xem trước)
- [`c5c5461`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/c5c5461) — màn hình chờ đợi dữ liệu tải xong
- [`6058e8a`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/6058e8a) — màn hình chờ chạy mượt, không giật
- [`9621df1`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/9621df1) — đưa `app.css` và `run-ui.js` của phần 2 vào đúng vị trí
- [`3553678`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/3553678) — đợt bổ sung 20/11: Tailwind CSS, trang Giới thiệu / Liên hệ, Google Analytics, Sentry, báo cáo README, self-report
- [`84b843c`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/84b843c) — sửa báo cáo và phân công cho đúng thực tế

**Khó khăn gặp phải:**

Hiệu ứng chó mèo chạy bị giật trên máy thật dù chạy thử thì ổn; phải đo lại và chuyển sang dùng `transform`. File CSS mới upload nhầm chỗ nên web vẫn chạy bản cũ, mất thời gian tìm ra.

**Đánh giá bản thân:** 9/10

---

## Task 3 — Database Integration

**Tuần:** Tuần 1, ngày 12/11 – 13/11

**Công việc đã làm:**

- Tạo database Neon (PostgreSQL) và kho Vercel Blob, gắn vào project Vercel, đặt biến môi trường (`DATABASE_URL`, `JWT_SECRET`, `BLOB_READ_WRITE_TOKEN`).
- Kiểm tra toàn bộ chức năng trên web thật (thêm thú cưng, lần khám, mũi tiêm, tải giấy tờ) và báo lỗi để sửa.

**Bằng chứng đóng góp:**

- [`bb49ddf`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/bb49ddf) — sửa lỗi lưu ảnh lên Vercel Blob
- Web chạy: https://pawpass-hosothucung-web.vercel.app/

**Khó khăn gặp phải:**

Web báo "không kết nối được cơ sở dữ liệu", rồi thiếu `JWT_SECRET`, rồi kho ảnh Blob báo lỗi `access must be "public"` (do tạo kho Private) và sau đó thiếu token (Vercel đổi cách kết nối Blob). Phải đọc từng thông báo lỗi để sửa cấu hình.

**Đánh giá bản thân:** 9/10

---

## Task 4 — Optimization

**Tuần:** Tuần 2–3, ngày 13/11 – 20/11

**Công việc đã làm:**

- Chạy Lighthouse, sửa các mục bị trừ: ảnh WebP (1.040 KB → 196 KB), thẻ `<main>`, phông chữ và CSS không chặn hiển thị.
- Tìm nguyên nhân web chậm: máy chủ Vercel đặt ở Mỹ (iad1); thêm tải trang chủ trong 1 lần gọi, thu nhỏ ảnh trước khi tải lên.
- 25–26/11 (sau bản chấm thử): đo Lighthouse các trang chính **sau khi đăng nhập** bằng DevTools (bỏ chọn Clear storage), tìm và sửa 2 lỗi: trang Tổng quan xô lệch do phông chữ (Performance 83–87 → 100, CLS 0,262 → 0) và sai thứ tự tiêu đề ở trang chi tiết bé (Accessibility 99 → 100); đưa bảng điểm và ảnh vào README.
- Đợt bổ sung: tích hợp Google Analytics và Sentry, viết lại README theo template báo cáo.

**Bằng chứng đóng góp:**

- [`ab67f70`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/ab67f70) — trang chủ tải trong 1 lần gọi (`/api/overview`), nút Thử lại
- [`15b8a0e`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/15b8a0e) — tải CSS không chặn hiển thị (Lighthouse)
- [`3553678`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/3553678) — Google Analytics, Sentry (`public/js/monitoring.js`, `server/monitor.js`)
- Ảnh WebP và thẻ `<main>` đã có từ lần đưa lên đầu tiên [`a735c4d`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/a735c4d)
- Ảnh Lighthouse trước (13/11): `docs/images/lighthouse-truoc-van-de.png`, `lighthouse-truoc-con-lai.png` · sau (20/11, 100/100/100/100): `docs/images/lighthouse-sau-desktop.jpg`, `lighthouse-sau-mobile.jpg`
- Google Analytics nhận người dùng thật: `docs/images/ga-realtime.png` · Sentry nhận lỗi thử: `docs/images/sentry-issues.png`
- Issue [#1](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/1) → PR [#2](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/2) (phông chữ, đã merge) · Issue [#3](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/3) → PR [#4](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/4) (thứ tự tiêu đề, đã merge) · Issue [#5](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/5) → PR [#6](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/6) (README Lighthouse, đã merge)

**Khó khăn gặp phải:**

Lighthouse vẫn báo mục đỏ sau khi sửa; phải phân biệt mục bị trừ điểm với mục chỉ mang tính thông tin.

**Đánh giá bản thân:** 9/10

---

## Task 5 — Peer Review

**Tuần:** Tuần 2, ngày 13/11 – 20/11; bổ sung 27/11, 28/11

**Công việc đã làm:**

- Review web **nhóm 2 (Focus Space)**: dùng thử, góp ý tương tác với chú mèo cho sống động hơn và số lượng vật thể trong phòng.
- Góp ý cho **nhóm 5 (web bán quần áo)** về giao diện, thiết kế tổng thể và cách trình bày cho hợp mắt.
- 27/11 (sau bản chấm thử): góp ý chi tiết cho **nhóm 5 (Thai Tu Fashion)** trên bản web đã đưa lên mạng — đi qua trang chủ, trang sản phẩm, thêm vào giỏ, Smart Studio; góp ý theo 3 tiêu chí, bảng 5 đề xuất kèm mức độ, 5 ảnh minh họa; gửi cho nhóm 5 và lưu vào `docs/reviews/given/`.
- Nhận 3 góp ý từ nhóm 2 cho PawPass: sửa 2 góp ý (màn hình chờ tải nền trang chính, F5 không còn nhảy qua trang đăng nhập), giữ nguyên 1 góp ý (kích thước chú mèo — linh vật của nhóm) và giải thích lý do.
- 28/11: xử lý 3 issue góp ý nhận được (nhóm 2 [#16](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/16), FocusFlow [#23](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/23), ThaiTuFashion [#26](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/26)). Lọc theo nguyên tắc: góp ý sửa ít code, không đổi thiết kế / ERD đã duyệt thì sửa; còn lại trả lời lý do theo bảng Góp ý / Quyết định / Lý do. Sửa: ô "Hiện mật khẩu" (PR [#27](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/27)), tự focus ô lỗi đầu tiên khi form sai (PR [#28](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/28)); trả lời trong cả 3 issue; ghi quyết định vào `docs/reviews/received.md` và README 5(b) (PR [#30](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/30)).
- 28/11: thử lại trên web thật sau khi merge, phát hiện tích "Hiện mật khẩu" làm mất ô mật khẩu do lỗi trong `runtime.js`; mở [#31](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/31) và sửa ở PR [#32](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/32). Cập nhật README (Milestone M5, M6, bảng Issue → nhánh → PR — PR [#34](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/34)) và sửa tài liệu lệch (PR [#36](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/36)), self-report (PR [#38](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/38)), rà soát và đồng bộ README / tài liệu trước khi nộp (PR [#40](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/40)). Mọi PR đều có Thế Dũng duyệt trước khi merge.

**Bằng chứng đóng góp:**

- Bảng góp ý và cách xử lý: mục Task 5 trong `README.md`
- [`c5c5461`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/c5c5461), [`6058e8a`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/6058e8a) — màn hình chờ tải nền trang chính
- [`9725d89`](https://github.com/iceruychi-netizen/PawPass-Hosothucung/commit/9725d89) — F5 giữ đúng trang đang xem
- Xử lý góp ý nhận được (28/11): [`docs/reviews/received.md`](../reviews/received.md) — PR [#27](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/27), [#28](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/28), [#30](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/30), [#32](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/32), [#34](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/34), [#36](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/36), [#38](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/38), [#40](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/40); Milestone [M5](https://github.com/iceruychi-netizen/PawPass-Hosothucung/milestone/5), [M6](https://github.com/iceruychi-netizen/PawPass-Hosothucung/milestone/6)
- Góp ý chi tiết nhóm 5: [`docs/reviews/given/nhom-5-thai-tu-fashion.md`](../reviews/given/nhom-5-thai-tu-fashion.md) — Issue [#10](https://github.com/iceruychi-netizen/PawPass-Hosothucung/issues/10) → PR [#18](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/18), [#20](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/20)

**Khó khăn gặp phải:**

Web nhóm 5 chưa đưa lên mạng nên chỉ góp ý được trên bản đang làm. Với góp ý "mèo quá to làm giảm điểm Lighthouse" của nhóm 2, phải cân nhắc giữa tốc độ và linh vật của nhóm; cuối cùng giữ nguyên chú mèo và tối ưu bằng cách khác (ảnh WebP, chuyển động bằng `transform`).

**Đánh giá bản thân:** 9/10

---

## Khai báo sử dụng AI

| Phần / file | Công cụ AI | AI làm gì | Tôi đã làm gì với phần đó |
|---|---|---|---|
| Phần lớn mã nguồn (giao diện, logic, API, test) và tài liệu | Claude | Viết code, tài liệu, test theo yêu cầu và tài liệu Step 1–2 | Đưa yêu cầu, thử trên web thật, báo lỗi, quyết định sửa gì; deploy và cấu hình Vercel / Neon / Blob |
| Đợt sửa sau bản chấm thử (phông chữ, thứ tự tiêu đề, README Lighthouse, Milestone / Issue / PR) | Claude | Đọc báo cáo Lighthouse (JSON) tìm nguyên nhân, viết bản sửa và nội dung README; thao tác GitHub (tạo Issue, nhánh, PR, Milestone) qua trình duyệt trên tài khoản của tôi | Đo Lighthouse trên web thật và link Preview, kiểm tra kết quả, quyết định merge |
| Xử lý góp ý nhận được và sửa lỗi `runtime.js` (28/11) | Claude | Đọc 3 issue góp ý, đối chiếu với code, viết bản sửa và test E2E, soạn câu trả lời; thử web thật qua trình duyệt và tìm ra lỗi mất ô mật khẩu; thao tác GitHub (Issue, nhánh, PR, Milestone, merge) trên tài khoản của tôi | Quyết định góp ý nào sửa, góp ý nào từ chối và lý do; duyệt nội dung trả lời trước khi đăng; nhờ thành viên khác duyệt PR trước khi merge |
| Góp ý chi tiết nhóm 5, README cuối, review / merge PR (26–27/11) | Claude | Dùng thử web nhóm 5 qua trình duyệt và soạn nháp góp ý; soạn nội dung README; thao tác GitHub (tạo nhánh, PR, Approve, merge) trên tài khoản của tôi | Gửi góp ý cho nhóm 5, kiểm tra nội dung, quyết định Approve / merge từng PR |

---

## Tổng Kết Đóng Góp Cá Nhân

**Tóm tắt những gì bạn đã đóng góp cho dự án:**

Tôi điều phối cả nhóm từ prototype, tài liệu Step 2 đến khi web chạy thật trên Vercel. Tôi làm việc trực tiếp với AI Coding Agent: đưa yêu cầu, thử trên web thật, báo lỗi và kiểm tra lại từng bản sửa. Phần tôi tự hào nhất là xử lý được chuỗi lỗi khi deploy (database, JWT, kho ảnh) và làm web hết giật, hết chậm. Tôi học được cách deploy một web có database, cách đọc thông báo lỗi để tìm nguyên nhân, và cách làm việc nhóm trên GitHub.

**Ước tính % đóng góp so với cả nhóm:** ~40%

**Điểm tự đánh giá tổng thể:** 9/10
