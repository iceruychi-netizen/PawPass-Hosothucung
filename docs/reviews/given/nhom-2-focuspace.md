# Góp ý UI/UX cho Nhóm 2 (FocuSpace)

## Thông tin chung

- **Nhóm được review:** Nhóm 2 (FocuSpace)
- **Link web:** https://focuspace-iota.vercel.app
- **Link repo:** https://github.com/CaoLePhucThinh2203/FocuSpace
- **Ngày review:** 26/11/2026
- **Người review:** Nguyễn Thế Dũng (Nhóm 4 – PawPass)
- **Đã gửi cho nhóm 2:** Issue [FocuSpace #174](https://github.com/CaoLePhucThinh2203/FocuSpace/issues/174)
- **Cách review:** dùng thử trên máy tính (Chrome) và điện thoại, đi qua Trang chủ, Căn phòng, Thư viện, Thống kê.

## 1. Usability (Tính khả dụng)

**Điểm mạnh**

- Trang chủ nói rõ web dùng để làm gì ngay ở tiêu đề "Không gian ảo giúp tập trung." và có 2 nút rõ ràng **Vào phòng** / **Xem thư viện**.
- Trong Căn phòng, đồng hồ **Pomodoro 25:00 + nút Bắt đầu** ở góc phải trên, luôn thấy; bấm một lần là chạy, nút đổi thành "Tạm dừng".
- Dòng trạng thái "Phòng: Phòng học · Đang có: 2 nguồn âm thanh" cho biết ngay mình đang ở đâu và đang bật gì.
- Rê chuột vào 3 nút biểu tượng thì hiện tên nút (ví dụ "Bảng âm lượng"); bấm nút nốt nhạc mở bảng "Đồ vật phát âm thanh" có hướng dẫn ngắn "Kéo vào phòng. Bấm vào đồ vật để chỉnh âm lượng."

**Đề xuất cải thiện**

- **3 nút biểu tượng góc trái trên Căn phòng:** trên máy tính rê chuột mới hiện tên nút; trên điện thoại / máy tính bảng không có rê chuột, người dùng chỉ thấy 3 biểu tượng, phải bấm thử từng nút mới biết nút nào làm gì. Đề xuất trên màn hình cảm ứng hiện chữ nhỏ dưới mỗi biểu tượng, hoặc lần đầu vào phòng hiện sẵn tên 3 nút vài giây.
- **Đồ vật trên bàn có vùng bấm rất nhỏ:** ly cà phê khoảng 16×19px (trên điện thoại 17×14px), tai nghe 24×33px, đèn bàn 28×24px, khó bấm bằng ngón tay. Đề xuất tăng vùng bấm lên tối thiểu 44×44px (thêm vùng trong suốt quanh đồ vật).
- **Đồ vật kéo thả được nhưng không có gợi ý:** người dùng không biết đồ vật kéo được cho tới khi thử. Đề xuất lần đầu vào phòng hiện gợi ý ngắn "Kéo đồ vật để sắp xếp, bấm để mở bảng điều khiển" rồi tự ẩn.

## 2. Aesthetics (Tính thẩm mỹ)

**Điểm mạnh**

- Phong cách pixel art đồng nhất từ trang chủ tới trong phòng; tông nâu tối, ánh lửa lò sưởi và mưa ngoài cửa sổ tạo đúng không khí lo-fi.
- Mũi tên chuyển phòng hai bên vẽ cùng phong cách pixel, nhìn là biết bấm để đổi phòng.

**Đề xuất cải thiện**

- **Căn phòng trên điện thoại cầm dọc:** toàn bộ giao diện xoay ngang 90° (chữ "Phòng: Phòng học", đồng hồ, nút Bắt đầu đều nằm nghiêng), không có thông báo bảo người dùng xoay máy. Đề xuất hiện gợi ý "Xoay ngang điện thoại để có trải nghiệm tốt nhất", hoặc làm thêm bố cục dọc.
- **Chữ nhỏ trên nền tối** (dòng "Để trải nghiệm tốt nhất, hãy đeo tai nghe.", nhãn "FOCUS"): chữ nhỏ và màu nhạt so với nền. Đề xuất tăng cỡ chữ hoặc độ sáng một chút cho dễ đọc.

## 3. User-friendliness (Tính thân thiện với người dùng)

**Điểm mạnh**

- Cho tự chọn phòng (học, ngủ, sân vườn), thời tiết, đồ vật và âm thanh: người dùng tự tạo không gian riêng.
- Các nút và đồ vật có nhãn tiếng Việt rõ nghĩa cho trình đọc màn hình (ví dụ "Đèn bàn — kéo để di chuyển, Enter để mở bảng điều khiển").
- Có gợi ý đeo tai nghe ngay trang đầu.

**Đề xuất cải thiện**

- **Pomodoro khi chuyển tab:** đồng hồ chạy mà chuyển sang tab khác thì khó biết còn bao lâu / đã hết giờ chưa. Đề xuất hiện thời gian còn lại trên tiêu đề tab (ví dụ "24:10 · FocuSpace") và phát âm báo khi hết giờ (nếu đã có thì bỏ qua ý này).
- **Lưu lựa chọn khi chuyển phòng:** chưa rõ âm thanh và đồ vật đã chỉnh có được giữ lại khi chuyển phòng / tải lại trang không. Đề xuất ghi nhớ lựa chọn và hiện thông báo nhỏ "Đã lưu".

## Bảng tổng hợp đề xuất

| # | Tiêu chí | Vấn đề | Đề xuất | Mức độ |
|---|---|---|---|---|
| 1 | Aesthetics | Căn phòng xoay ngang 90° trên điện thoại cầm dọc, không có thông báo | Gợi ý xoay máy hoặc làm bố cục dọc | Cao |
| 2 | Usability | Đồ vật trên bàn có vùng bấm rất nhỏ (ly cà phê 17×14px trên điện thoại) | Vùng bấm tối thiểu 44×44px | Cao |
| 3 | Usability | 3 nút biểu tượng không có chữ trên màn hình cảm ứng | Hiện chữ dưới biểu tượng trên màn hình cảm ứng | Trung bình |
| 4 | Usability | Không biết đồ vật kéo thả được | Gợi ý ngắn lần đầu vào phòng | Trung bình |
| 5 | User-friendliness | Khó theo dõi Pomodoro khi chuyển tab | Thời gian trên tiêu đề tab, âm báo hết giờ | Trung bình |
| 6 | User-friendliness | Chưa rõ lựa chọn có được lưu khi chuyển phòng | Ghi nhớ và báo "Đã lưu" | Thấp |
| 7 | Aesthetics | Chữ nhỏ, màu nhạt trên nền tối | Tăng cỡ chữ / độ sáng | Thấp |

## Hình minh họa
Ảnh minh họa và ảnh chụp tin nhắn đã gửi góp ý cho nhóm 2: xem comment trong Pull Request #13.
