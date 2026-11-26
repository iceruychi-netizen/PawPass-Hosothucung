# Biên bản họp nhóm — Duyệt wireframe bổ sung và xem lại lược đồ CSDL

| | |
|---|---|
| **Ngày giờ** | 27/11/2026, 01:11 – 01:45 (34 phút) |
| **Hình thức** | Online — gọi thoại nhóm Messenger "Basic Web" |
| **Người dự** | Nguyễn Hữu Triết, Đinh Phùng Duy Huy, Nguyễn Thế Dũng, Nguyễn Phước Thành Đạt, Đào Duy Quang |
| **Người ghi** | Nguyễn Thế Dũng |
| **Issue liên quan** | #7 (wireframe, PR #17), #8 (họp duyệt + biên bản) |

## 1. Duyệt wireframe bổ sung (Thế Dũng trình bày, wireframe do Duy Huy vẽ — PR #17)

Wireframe: `docs/images/wireframe/` — Giới thiệu, Liên hệ, Tìm kiếm, Tài khoản (desktop + điện thoại).

| Trang | Ý kiến trong buổi họp | Kết luận |
|---|---|---|
| Giới thiệu | Không có ý kiến sửa | Đồng ý |
| Liên hệ | Không có ý kiến sửa | Đồng ý |
| Tìm kiếm | Không có ý kiến sửa | Đồng ý |
| Tài khoản | Không có ý kiến sửa | Đồng ý |

**Đối chiếu với web đang chạy:** khớp, giữ nguyên.

## 2. Xem lại lược đồ CSDL (Thế Dũng trình bày)

Tài liệu: ERD trong `README.md` và `db/schema.sql`.

| Câu hỏi xem lại | Ý kiến | Kết luận |
|---|---|---|
| 5 bảng đã đủ cho các chức năng chưa? | Không có ý kiến bổ sung | Giữ nguyên |
| Khóa ngoại `ON DELETE CASCADE`: xóa bé thì xóa hết hồ sơ — có đúng mong muốn? | Không có ý kiến khác | Giữ nguyên |
| Ràng buộc `CHECK` (loài, giới tính, cân nặng 0–200 kg, loại tệp jpg/png/pdf) có hợp lý? | Không có ý kiến khác | Giữ nguyên |
| Có cần thêm chỉ mục / cột nào không? | Không có đề nghị thêm | Giữ nguyên |

## 3. Việc cần làm sau họp

Không có việc phát sinh.

## 4. Bằng chứng

Cuộc gọi nhóm Messenger: bắt đầu 01:11, đủ 5 thành viên tham gia, kết thúc 01:45 (34 phút).

![Ảnh chụp cuộc gọi nhóm](anh-hop-27-11.png)
