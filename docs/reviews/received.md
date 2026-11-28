# Góp ý nhận được và quyết định của nhóm

Nhóm chỉ sửa ngay những góp ý **sửa ít code, không đổi thiết kế đã duyệt, ERD hay API**. Góp ý cần đổi lược đồ CSDL hoặc làm lại hình ảnh được ghi nhận cho bản sau vì đã sát hạn nộp (29/11/2026).

Các mục "Đã làm": PR [#27](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/27) (`Closes #23`), PR [#28](https://github.com/iceruychi-netizen/PawPass-Hosothucung/pull/28) (`Closes #26`).

---

## Issue #16 — Nhóm 2 (FocuSpace)

Chào Nhóm 2,

Cảm ơn Tuấn Hưng và Đình Nhiên đã xem PawPass hai lần (12/11 và 26/11) và chỉ rõ từng chỗ. Sau khi bàn trong nhóm, đây là phản hồi cho từng góp ý:

| # | Góp ý | Quyết định | Lý do |
|---|---|---|---|
| 1 | F5 / vừa đăng nhập bị đưa về trang đăng nhập rồi mới về trang đang xem (User-friendliness) | Đã có sẵn | Nhóm đã sửa theo góp ý đợt đầu của các bạn (commit `9725d89`): web nhớ phiên đăng nhập và trang đang xem, F5 mở lại đúng trang đó ngay, không qua trang đăng nhập. |
| 2 | Logo "PawPass" lúc bấm được lúc không (User-friendliness) | Không làm | Thanh điều hướng của ứng dụng luôn có nút **Trang chủ** ngay cạnh logo, trên mọi trang và mọi khổ màn hình, nên người dùng luôn có một đường về trang chủ rõ ràng. Nhóm giữ logo đúng như bản thiết kế đã duyệt. |
| 3 | Tên và ảnh đại diện trông như bấm được nhưng không làm gì (User-friendliness) | Không làm | Trang tài khoản đã có nút **Tài khoản** riêng trên thanh điều hướng; tên và ảnh đại diện ở góc phải chỉ để cho biết ai đang đăng nhập, theo bản thiết kế đã duyệt. |
| 4 | Chọn loài "Khác" không có ô nhập loài cụ thể (Usability) | Không làm | Thêm ô loài riêng cần thêm cột vào bảng `pets` (lược đồ CSDL cả nhóm đã duyệt ngày 27/11), sửa API, quy tắc kiểm tra dữ liệu và test. Hiện ô **Giống** (không bắt buộc) dùng để ghi cụ thể, ví dụ chọn "Khác" và ghi Giống "Rùa tai đỏ". |
| 5 | Sửa email trực tiếp trong form tài khoản dễ làm hỏng đăng nhập (User-friendliness) | Không làm | Xác minh khi đổi email (gửi thư xác nhận, mã OTP) cần dịch vụ gửi email và quy trình xác thực, vượt phạm vi môn Basic Web. Máy chủ đã kiểm tra định dạng email và báo rõ nếu email đã có người dùng; sau khi đổi, người dùng vẫn ở trong phiên và lần sau đăng nhập bằng email mới. |
| 6 | Mèo cam giống chó; chim, thỏ, hamster chưa có hình riêng (Aesthetics) | Không làm | Hình minh họa chỉ là hình tạm khi bé chưa có ảnh. Người dùng tải ảnh thật của bé lên ngay trong hồ sơ (nút **Thêm ảnh / Đổi ảnh**), ảnh đó thay cho hình minh họa ở mọi nơi, nên nhóm không vẽ thêm hình cho từng loài. |

Các góp ý này đã được ghi vào `docs/reviews/received.md` của nhóm cùng quyết định và lý do.

Chúc Nhóm 2 hoàn thành đồ án thật tốt!

---

## Issue #23 — Nhóm FocusFlow (Thảo Anh)

Chào Nhóm FocusFlow,

Cảm ơn Thảo Anh đã thử PawPass trên cả laptop và giả lập iPhone 16. Sau khi bàn trong nhóm, đây là phản hồi cho từng góp ý:

| # | Góp ý | Quyết định | Lý do |
|---|---|---|---|
| 1 | Ô mật khẩu chưa có nút ẩn / hiện (Usability) | Đã làm | Thêm ô "Hiện mật khẩu" ngay dưới ô mật khẩu ở trang Đăng nhập, Đăng ký và hộp Đổi mật khẩu. Dùng ô tích có nhãn chữ thay cho biểu tượng con mắt để trình đọc màn hình đọc được và dễ bấm trên điện thoại (vùng bấm 44px). |
| 2 | Tiêu đề phụ bắt đầu bằng chữ thường (Aesthetics) | Không làm | Các dòng này dùng phông viết tay (Patrick Hand), đóng vai trò như ghi chú nguệch ngoạc trên cuốn sổ hộ chiếu, nên nhóm chủ ý viết thường theo bản thiết kế đã duyệt. Tiêu đề chính của mỗi trang ("Thú cưng", "Tài khoản"…) vẫn viết hoa đầu câu. |

Đã sửa trong PR #27 (`Closes #23`). Các góp ý đã được ghi vào `docs/reviews/received.md` của nhóm.

Chúc nhóm FocusFlow hoàn thành đồ án thật tốt!

---

## Issue #26 — Nhóm ThaiTuFashion (Lê Quang Khanh)

Chào Nhóm ThaiTuFashion,

Cảm ơn Quang Khanh đã xem kỹ cả web, README và phần test của PawPass. Sau khi bàn trong nhóm, đây là phản hồi cho từng góp ý:

| # | Góp ý | Quyết định | Lý do |
|---|---|---|---|
| 1 | Form có lỗi không cuộn / focus tới ô lỗi đầu tiên; thông báo lỗi che một phần form (Usability) | Đã làm | Khi bấm Lưu mà có ô sai (kiểm tra trên trình duyệt hoặc máy chủ trả lỗi), web tự cuộn ô lỗi đầu tiên ra **giữa màn hình** và đặt con trỏ vào đó, nên thông báo ở góc trên không còn che ô đang cần sửa. Áp dụng cho mọi form: đăng nhập, đăng ký, thú cưng, lần khám, mũi tiêm, tài liệu, tài khoản. |
| 2 | Thêm ngày tiêm nhắc lại, hiện mũi sắp đến hạn trong "Cần để ý" (User-friendliness) | Chưa làm, ghi nhận cho bản sau | Cần thêm cột ngày nhắc lại vào bảng `vaccinations` (lược đồ CSDL cả nhóm đã duyệt ngày 27/11), sửa API, form, mục "Cần để ý" và test. Sát hạn nộp nên nhóm không đổi lược đồ. Hiện có thể ghi lịch nhắc vào ô **Ghi chú** của mũi tiêm. |

Đã sửa trong PR #28 (`Closes #26`). Các góp ý đã được ghi vào `docs/reviews/received.md` của nhóm.

Chúc Nhóm ThaiTuFashion hoàn thành đồ án thật tốt!
