const hcm = ["Tân Định, Quận 1, Hồ Chí Minh", "Đa Kao, Quận 1, Hồ Chí Minh", "Bến Nghé, Quận 1, Hồ Chí Minh", "Bến Thành, Quận 1, Hồ Chí Minh", "Nguyễn Thái Bình, Quận 1, Hồ Chí Minh", "Phạm Ngũ Lão, Quận 1, Hồ Chí Minh", "Cầu Ông Lãnh, Quận 1, Hồ Chí Minh", "Cô Giang, Quận 1, Hồ Chí Minh", "Nguyễn Cư Trinh, Quận 1, Hồ Chí Minh", "Cầu Kho, Quận 1, Hồ Chí Minh", "Thạnh Xuân, Quận 12, Hồ Chí Minh", "Thạnh Lộc, Quận 12, Hồ Chí Minh", "Hiệp Thành, Quận 12, Hồ Chí Minh", "Thới An, Quận 12, Hồ Chí Minh", "Tân Chánh Hiệp, Quận 12, Hồ Chí Minh", "An Phú Đông, Quận 12, Hồ Chí Minh", "Tân Thới Hiệp, Quận 12, Hồ Chí Minh", "Trung Mỹ Tây, Quận 12, Hồ Chí Minh", "Tân Hưng Thuận, Quận 12, Hồ Chí Minh", "Đông Hưng Thuận, Quận 12, Hồ Chí Minh", "Tân Thới Nhất, Quận 12, Hồ Chí Minh", "Phường 15, Gò Vấp, Hồ Chí Minh", "Phường 17, Gò Vấp, Hồ Chí Minh", "Phường 6, Gò Vấp, Hồ Chí Minh", "Phường 16, Gò Vấp, Hồ Chí Minh", "Phường 12, Gò Vấp, Hồ Chí Minh", "Phường 14, Gò Vấp, Hồ Chí Minh", "Phường 10, Gò Vấp, Hồ Chí Minh", "Phường 5, Gò Vấp, Hồ Chí Minh", "Phường 1, Gò Vấp, Hồ Chí Minh", "Phường 8, Gò Vấp, Hồ Chí Minh", "Phường 11, Gò Vấp, Hồ Chí Minh", "Phường 3, Gò Vấp, Hồ Chí Minh", "Phường 13, Bình Thạnh, Hồ Chí Minh", "Phường 11, Bình Thạnh, Hồ Chí Minh", "Phường 27, Bình Thạnh, Hồ Chí Minh", "Phường 26, Bình Thạnh, Hồ Chí Minh", "Phường 12, Bình Thạnh, Hồ Chí Minh", "Phường 25, Bình Thạnh, Hồ Chí Minh", "Phường 5, Bình Thạnh, Hồ Chí Minh", "Phường 7, Bình Thạnh, Hồ Chí Minh", "Phường 14, Bình Thạnh, Hồ Chí Minh", "Phường 2, Bình Thạnh, Hồ Chí Minh", "Phường 1, Bình Thạnh, Hồ Chí Minh", "Phường 17, Bình Thạnh, Hồ Chí Minh", "Phường 19, Bình Thạnh, Hồ Chí Minh", "Phường 22, Bình Thạnh, Hồ Chí Minh", "Phường 28, Bình Thạnh, Hồ Chí Minh", "Phường 2, Tân Bình, Hồ Chí Minh", "Phường 4, Tân Bình, Hồ Chí Minh", "Phường 12, Tân Bình, Hồ Chí Minh", "Phường 13, Tân Bình, Hồ Chí Minh", "Phường 1, Tân Bình, Hồ Chí Minh", "Phường 3, Tân Bình, Hồ Chí Minh", "Phường 11, Tân Bình, Hồ Chí Minh", "Phường 7, Tân Bình, Hồ Chí Minh", "Phường 5, Tân Bình, Hồ Chí Minh", "Phường 10, Tân Bình, Hồ Chí Minh", "Phường 6, Tân Bình, Hồ Chí Minh", "Phường 8, Tân Bình, Hồ Chí Minh", "Phường 9, Tân Bình, Hồ Chí Minh", "Phường 14, Tân Bình, Hồ Chí Minh", "Phường 15, Tân Bình, Hồ Chí Minh", "Tân Sơn Nhì, Tân Phú, Hồ Chí Minh", "Tây Thạnh, Tân Phú, Hồ Chí Minh", "Sơn Kỳ, Tân Phú, Hồ Chí Minh", "Tân Quý, Tân Phú, Hồ Chí Minh", "Tân Thành, Tân Phú, Hồ Chí Minh", "Phú Thọ Hòa, Tân Phú, Hồ Chí Minh", "Phú Thạnh, Tân Phú, Hồ Chí Minh", "Phú Trung, Tân Phú, Hồ Chí Minh", "Hòa Thạnh, Tân Phú, Hồ Chí Minh", "Hiệp Tân, Tân Phú, Hồ Chí Minh", "Tân Thới Hòa, Tân Phú, Hồ Chí Minh", "Phường 4, Phú Nhuận, Hồ Chí Minh", "Xã 5, Phú Nhuận, Hồ Chí Minh", "Phường 9, Phú Nhuận, Hồ Chí Minh", "Phường 7, Phú Nhuận, Hồ Chí Minh", "Phường 1, Phú Nhuận, Hồ Chí Minh", "Phường 2, Phú Nhuận, Hồ Chí Minh", "Phường 8, Phú Nhuận, Hồ Chí Minh", "Phường 10, Phú Nhuận, Hồ Chí Minh", "Phường 11, Phú Nhuận, Hồ Chí Minh", "Xã 15, Phú Nhuận, Hồ Chí Minh", "Phường 13, Phú Nhuận, Hồ Chí Minh", "Linh Xuân, Thủ Đức, Hồ Chí Minh", "Bình Chiểu, Thủ Đức, Hồ Chí Minh", "Linh Trung, Thủ Đức, Hồ Chí Minh", "Tam Bình, Thủ Đức, Hồ Chí Minh", "Tam Phú, Thủ Đức, Hồ Chí Minh", "Hiệp Bình Phước, Thủ Đức, Hồ Chí Minh", "Hiệp Bình Chánh, Thủ Đức, Hồ Chí Minh", "Linh Chiểu, Thủ Đức, Hồ Chí Minh", "Linh Tây, Thủ Đức, Hồ Chí Minh", "Linh Đông, Thủ Đức, Hồ Chí Minh", "Bình Thọ, Thủ Đức, Hồ Chí Minh", "Trường Thọ, Thủ Đức, Hồ Chí Minh", "Long Bình, Thủ Đức, Hồ Chí Minh", "Long Thạnh Mỹ, Thủ Đức, Hồ Chí Minh", "Tân Phú, Thủ Đức, Hồ Chí Minh", "Hiệp Phú, Thủ Đức, Hồ Chí Minh", "Tăng Nhơn Phú A, Thủ Đức, Hồ Chí Minh", "Tăng Nhơn Phú B, Thủ Đức, Hồ Chí Minh", "Phước Long B, Thủ Đức, Hồ Chí Minh", "Phước Long A, Thủ Đức, Hồ Chí Minh", "Trường Thạnh, Thủ Đức, Hồ Chí Minh", "Long Phước, Thủ Đức, Hồ Chí Minh", "Long Trường, Thủ Đức, Hồ Chí Minh", "Phước Bình, Thủ Đức, Hồ Chí Minh", "Phú Hữu, Thủ Đức, Hồ Chí Minh", "Thảo Điền, Thủ Đức, Hồ Chí Minh", "An Phú, Thủ Đức, Hồ Chí Minh", "An Khánh, Thủ Đức, Hồ Chí Minh", "Bình Trưng Đông, Thủ Đức, Hồ Chí Minh", "Bình Trưng Tây, Thủ Đức, Hồ Chí Minh", "Cát Lái, Thủ Đức, Hồ Chí Minh", "Thạnh Mỹ Lợi, Thủ Đức, Hồ Chí Minh", "An Lợi Đông, Thủ Đức, Hồ Chí Minh", "Thủ Thiêm, Thủ Đức, Hồ Chí Minh", "Phường 14, Quận 3, Hồ Chí Minh", "Phường 12, Quận 3, Hồ Chí Minh", "Phường 11, Quận 3, Hồ Chí Minh", "Võ Thị Sáu, Quận 3, Hồ Chí Minh", "Phường 9, Quận 3, Hồ Chí Minh", "Phường 4, Quận 3, Hồ Chí Minh", "Phường 5, Quận 3, Hồ Chí Minh", "Phường 3, Quận 3, Hồ Chí Minh", "Phường 2, Quận 3, Hồ Chí Minh", "Phường 1, Quận 3, Hồ Chí Minh", "Phường 15, Quận 10, Hồ Chí Minh", "Phường 13, Quận 10, Hồ Chí Minh", "Phường 14, Quận 10, Hồ Chí Minh", "Phường 12, Quận 10, Hồ Chí Minh", "Phường 10, Quận 10, Hồ Chí Minh", "Phường 9, Quận 10, Hồ Chí Minh", "Phường 1, Quận 10, Hồ Chí Minh", "Phường 8, Quận 10, Hồ Chí Minh", "Phường 2, Quận 10, Hồ Chí Minh", "Phường 4, Quận 10, Hồ Chí Minh", "Phường 6, Quận 10, Hồ Chí Minh", "Phường 15, Quận 11, Hồ Chí Minh", "Phường 5, Quận 11, Hồ Chí Minh", "Phường 14, Quận 11, Hồ Chí Minh", "Phường 3, Quận 11, Hồ Chí Minh", "Phường 11, Quận 11, Hồ Chí Minh", "Phường 8, Quận 11, Hồ Chí Minh", "Phường 10, Quận 11, Hồ Chí Minh", "Phường 7, Quận 11, Hồ Chí Minh", "Phường 1, Quận 11, Hồ Chí Minh", "Phường 16, Quận 11, Hồ Chí Minh", "Phường 13, Quận 4, Hồ Chí Minh", "Phường 9, Quận 4, Hồ Chí Minh", "Phường 8, Quận 4, Hồ Chí Minh", "Phường 18, Quận 4, Hồ Chí Minh", "Phường 4, Quận 4, Hồ Chí Minh", "Phường 3, Quận 4, Hồ Chí Minh", "Phường 16, Quận 4, Hồ Chí Minh", "Phường 2, Quận 4, Hồ Chí Minh", "Phường 15, Quận 4, Hồ Chí Minh", "Phường 1, Quận 4, Hồ Chí Minh", "Phường 4, Quận 5, Hồ Chí Minh", "Phường 9, Quận 5, Hồ Chí Minh", "Phường 2, Quận 5, Hồ Chí Minh", "Phường 12, Quận 5, Hồ Chí Minh", "Phường 7, Quận 5, Hồ Chí Minh", "Phường 1, Quận 5, Hồ Chí Minh", "Phường 11, Quận 5, Hồ Chí Minh", "Phường 14, Quận 5, Hồ Chí Minh", "Phường 5, Quận 5, Hồ Chí Minh", "Phường 13, Quận 5, Hồ Chí Minh", "Phường 14, Quận 6, Hồ Chí Minh", "Phường 13, Quận 6, Hồ Chí Minh", "Phường 9, Quận 6, Hồ Chí Minh", "Phường 12, Quận 6, Hồ Chí Minh", "Phường 11, Quận 6, Hồ Chí Minh", "Phường 2, Quận 6, Hồ Chí Minh", "Phường 1, Quận 6, Hồ Chí Minh", "Phường 8, Quận 6, Hồ Chí Minh", "Phường 7, Quận 6, Hồ Chí Minh", "Phường 10, Quận 6, Hồ Chí Minh", "Rạch Ông, Quận 8, Hồ Chí Minh", "Hưng Phú, Quận 8, Hồ Chí Minh", "Phường 4, Quận 8, Hồ Chí Minh", "Xóm Củi, Quận 8, Hồ Chí Minh", "Phường 5, Quận 8, Hồ Chí Minh", "Phường 14, Quận 8, Hồ Chí Minh", "Phường 6, Quận 8, Hồ Chí Minh", "Phường 15, Quận 8, Hồ Chí Minh", "Phường 16, Quận 8, Hồ Chí Minh", "Phường 7, Quận 8, Hồ Chí Minh", "Bình Hưng Hòa, Bình Tân, Hồ Chí Minh", "Bình Hưng Hoà A, Bình Tân, Hồ Chí Minh", "Bình Hưng Hoà B, Bình Tân, Hồ Chí Minh", "Bình Trị Đông, Bình Tân, Hồ Chí Minh", "Bình Trị Đông A, Bình Tân, Hồ Chí Minh", "Bình Trị Đông B, Bình Tân, Hồ Chí Minh", "Tân Tạo, Bình Tân, Hồ Chí Minh", "Tân Tạo A, Bình Tân, Hồ Chí Minh", "An Lạc, Bình Tân, Hồ Chí Minh", "An Lạc A, Bình Tân, Hồ Chí Minh", "Tân Thuận Đông, Quận 7, Hồ Chí Minh", "Tân Thuận Tây, Quận 7, Hồ Chí Minh", "Tân Kiểng, Quận 7, Hồ Chí Minh", "Tân Hưng, Quận 7, Hồ Chí Minh", "Bình Thuận, Quận 7, Hồ Chí Minh", "Tân Quy, Quận 7, Hồ Chí Minh", "Phú Thuận, Quận 7, Hồ Chí Minh", "Tân Phú, Quận 7, Hồ Chí Minh", "Tân Phong, Quận 7, Hồ Chí Minh", "Phú Mỹ, Quận 7, Hồ Chí Minh", "Thị trấn Củ Chi, Củ Chi, Hồ Chí Minh", "Phú Mỹ Hưng, Củ Chi, Hồ Chí Minh", "An Phú, Củ Chi, Hồ Chí Minh", "Trung Lập Thượng, Củ Chi, Hồ Chí Minh", "An Nhơn Tây, Củ Chi, Hồ Chí Minh", "Nhuận Đức, Củ Chi, Hồ Chí Minh", "Phạm Văn Cội, Củ Chi, Hồ Chí Minh", "Phú Hòa Đông, Củ Chi, Hồ Chí Minh", "Trung Lập Hạ, Củ Chi, Hồ Chí Minh", "Trung An, Củ Chi, Hồ Chí Minh", "Phước Thạnh, Củ Chi, Hồ Chí Minh", "Phước Hiệp, Củ Chi, Hồ Chí Minh", "Tân An Hội, Củ Chi, Hồ Chí Minh", "Phước Vĩnh An, Củ Chi, Hồ Chí Minh", "Thái Mỹ, Củ Chi, Hồ Chí Minh", "Tân Thạnh Tây, Củ Chi, Hồ Chí Minh", "Hòa Phú, Củ Chi, Hồ Chí Minh", "Tân Thạnh Đông, Củ Chi, Hồ Chí Minh", "Bình Mỹ, Củ Chi, Hồ Chí Minh", "Tân Phú Trung, Củ Chi, Hồ Chí Minh", "Tân Thông Hội, Củ Chi, Hồ Chí Minh", "Thị trấn Hóc Môn, Hóc Môn, Hồ Chí Minh", "Tân Hiệp, Hóc Môn, Hồ Chí Minh", "Nhị Bình, Hóc Môn, Hồ Chí Minh", "Đông Thạnh, Hóc Môn, Hồ Chí Minh", "Tân Thới Nhì, Hóc Môn, Hồ Chí Minh", "Thới Tam Thôn, Hóc Môn, Hồ Chí Minh", "Xuân Thới Sơn, Hóc Môn, Hồ Chí Minh", "Tân Xuân, Hóc Môn, Hồ Chí Minh", "Xuân Thới Đông, Hóc Môn, Hồ Chí Minh", "Trung Chánh, Hóc Môn, Hồ Chí Minh", "Xuân Thới Thượng, Hóc Môn, Hồ Chí Minh", "Bà Điểm, Hóc Môn, Hồ Chí Minh", "Thị trấn Tân Túc, Bình Chánh, Hồ Chí Minh", "Phạm Văn Hai, Bình Chánh, Hồ Chí Minh", "Vĩnh Lộc A, Bình Chánh, Hồ Chí Minh", "Vĩnh Lộc B, Bình Chánh, Hồ Chí Minh", "Bình Lợi, Bình Chánh, Hồ Chí Minh", "Lê Minh Xuân, Bình Chánh, Hồ Chí Minh", "Tân Nhựt, Bình Chánh, Hồ Chí Minh", "Tân Kiên, Bình Chánh, Hồ Chí Minh", "Bình Hưng, Bình Chánh, Hồ Chí Minh", "Phong Phú, Bình Chánh, Hồ Chí Minh", "An Phú Tây, Bình Chánh, Hồ Chí Minh", "Hưng Long, Bình Chánh, Hồ Chí Minh", "Đa Phước, Bình Chánh, Hồ Chí Minh", "Tân Quý Tây, Bình Chánh, Hồ Chí Minh", "Bình Chánh, Bình Chánh, Hồ Chí Minh", "Quy Đức, Bình Chánh, Hồ Chí Minh", "Thị trấn Nhà Bè, Nhà Bè, Hồ Chí Minh", "Phước Kiển, Nhà Bè, Hồ Chí Minh", "Phước Lộc, Nhà Bè, Hồ Chí Minh", "Nhơn Đức, Nhà Bè, Hồ Chí Minh", "Phú Xuân, Nhà Bè, Hồ Chí Minh", "Long Thới, Nhà Bè, Hồ Chí Minh", "Hiệp Phước, Nhà Bè, Hồ Chí Minh", "Thị trấn Cần Thạnh, Cần Giờ, Hồ Chí Minh", "Bình Khánh, Cần Giờ, Hồ Chí Minh", "Tam Thôn Hiệp, Cần Giờ, Hồ Chí Minh", "An Thới Đông, Cần Giờ, Hồ Chí Minh", "Thạnh An, Cần Giờ, Hồ Chí Minh", "Long Hòa, Cần Giờ, Hồ Chí Minh", "Lý Nhơn, Cần Giờ, Hồ Chí Minh"]
const hn = ["Phúc Xá, Ba Đình, Hà Nội", "Trúc Bạch, Ba Đình, Hà Nội", "Vĩnh Phúc, Ba Đình, Hà Nội", "Cống Vị, Ba Đình, Hà Nội", "Liễu Giai, Ba Đình, Hà Nội", "Quán Thánh, Ba Đình, Hà Nội", "Ngọc Hà, Ba Đình, Hà Nội", "Điện Biên, Ba Đình, Hà Nội", "Đội Cấn, Ba Đình, Hà Nội", "Ngọc Khánh, Ba Đình, Hà Nội", "Kim Mã, Ba Đình, Hà Nội", "Giảng Võ, Ba Đình, Hà Nội", "Thành Công, Ba Đình, Hà Nội", "Phúc Tân, Hoàn Kiếm, Hà Nội", "Đồng Xuân, Hoàn Kiếm, Hà Nội", "Hàng Mã, Hoàn Kiếm, Hà Nội", "Hàng Buồm, Hoàn Kiếm, Hà Nội", "Hàng Đào, Hoàn Kiếm, Hà Nội", "Hàng Bồ, Hoàn Kiếm, Hà Nội", "Cửa Đông, Hoàn Kiếm, Hà Nội", "Lý Thái Tổ, Hoàn Kiếm, Hà Nội", "Hàng Bạc, Hoàn Kiếm, Hà Nội", "Hàng Gai, Hoàn Kiếm, Hà Nội", "Chương Dương, Hoàn Kiếm, Hà Nội", "Hàng Trống, Hoàn Kiếm, Hà Nội", "Cửa Nam, Hoàn Kiếm, Hà Nội", "Hàng Bông, Hoàn Kiếm, Hà Nội", "Tràng Tiền, Hoàn Kiếm, Hà Nội", "Trần Hưng Đạo, Hoàn Kiếm, Hà Nội", "Phan Chu Trinh, Hoàn Kiếm, Hà Nội", "Hàng Bài, Hoàn Kiếm, Hà Nội", "Phú Thượng, Tây Hồ, Hà Nội", "Nhật Tân, Tây Hồ, Hà Nội", "Tứ Liên, Tây Hồ, Hà Nội", "Quảng An, Tây Hồ, Hà Nội", "Xuân La, Tây Hồ, Hà Nội", "Yên Phụ, Tây Hồ, Hà Nội", "Bưởi, Tây Hồ, Hà Nội", "Thụy Khuê, Tây Hồ, Hà Nội", "Thượng Thanh, Long Biên, Hà Nội", "Ngọc Thụy, Long Biên, Hà Nội", "Giang Biên, Long Biên, Hà Nội", "Đức Giang, Long Biên, Hà Nội", "Việt Hưng, Long Biên, Hà Nội", "Gia Thụy, Long Biên, Hà Nội", "Ngọc Lâm, Long Biên, Hà Nội", "Phúc Lợi, Long Biên, Hà Nội", "Bồ Đề, Long Biên, Hà Nội", "Long Biên, Long Biên, Hà Nội", "Thạch Bàn, Long Biên, Hà Nội", "Phúc Đồng, Long Biên, Hà Nội", "Cự Khối, Long Biên, Hà Nội", "Nghĩa Đô, Cầu Giấy, Hà Nội", "Nghĩa Tân, Cầu Giấy, Hà Nội", "Mai Dịch, Cầu Giấy, Hà Nội", "Dịch Vọng, Cầu Giấy, Hà Nội", "Dịch Vọng Hậu, Cầu Giấy, Hà Nội", "Quan Hoa, Cầu Giấy, Hà Nội", "Yên Hoà, Cầu Giấy, Hà Nội", "Trung Hoà, Cầu Giấy, Hà Nội", "Cát Linh, Đống Đa, Hà Nội", "Văn Miếu - Quốc Tử Giám, Đống Đa, Hà Nội", "Láng Thượng, Đống Đa, Hà Nội", "Ô Chợ Dừa, Đống Đa, Hà Nội", "Văn Chương, Đống Đa, Hà Nội", "Hàng Bột, Đống Đa, Hà Nội", "Láng Hạ, Đống Đa, Hà Nội", "Khâm Thiên, Đống Đa, Hà Nội", "Thổ Quan, Đống Đa, Hà Nội", "Nam Đồng, Đống Đa, Hà Nội", "Quang Trung, Đống Đa, Hà Nội", "Trung Liệt, Đống Đa, Hà Nội", "Phương Liên - Trung Tự, Đống Đa, Hà Nội", "Kim Liên, Đống Đa, Hà Nội", "Phương Mai, Đống Đa, Hà Nội", "Thịnh Quang, Đống Đa, Hà Nội", "Khương Thượng, Đống Đa, Hà Nội", "Nguyễn Du, Hai Bà Trưng, Hà Nội", "Bạch Đằng, Hai Bà Trưng, Hà Nội", "Phạm Đình Hổ, Hai Bà Trưng, Hà Nội", "Lê Đại Hành, Hai Bà Trưng, Hà Nội", "Đồng Nhân, Hai Bà Trưng, Hà Nội", "Phố Huế, Hai Bà Trưng, Hà Nội", "Thanh Lương, Hai Bà Trưng, Hà Nội", "Thanh Nhàn, Hai Bà Trưng, Hà Nội", "Bách Khoa, Hai Bà Trưng, Hà Nội", "Đồng Tâm, Hai Bà Trưng, Hà Nội", "Vĩnh Tuy, Hai Bà Trưng, Hà Nội", "Quỳnh Mai, Hai Bà Trưng, Hà Nội", "Bạch Mai, Hai Bà Trưng, Hà Nội", "Minh Khai, Hai Bà Trưng, Hà Nội", "Trương Định, Hai Bà Trưng, Hà Nội", "Thanh Trì, Hoàng Mai, Hà Nội", "Vĩnh Hưng, Hoàng Mai, Hà Nội", "Định Công, Hoàng Mai, Hà Nội", "Mai Động, Hoàng Mai, Hà Nội", "Tương Mai, Hoàng Mai, Hà Nội", "Đại Kim, Hoàng Mai, Hà Nội", "Tân Mai, Hoàng Mai, Hà Nội", "Hoàng Văn Thụ, Hoàng Mai, Hà Nội", "Giáp Bát, Hoàng Mai, Hà Nội", "Lĩnh Nam, Hoàng Mai, Hà Nội", "Thịnh Liệt, Hoàng Mai, Hà Nội", "Trần Phú, Hoàng Mai, Hà Nội", "Hoàng Liệt, Hoàng Mai, Hà Nội", "Yên Sở, Hoàng Mai, Hà Nội", "Nhân Chính, Thanh Xuân, Hà Nội", "Thượng Đình, Thanh Xuân, Hà Nội", "Khương Trung, Thanh Xuân, Hà Nội", "Khương Mai, Thanh Xuân, Hà Nội", "Thanh Xuân Trung, Thanh Xuân, Hà Nội", "Phương Liệt, Thanh Xuân, Hà Nội", "Khương Đình, Thanh Xuân, Hà Nội", "Thanh Xuân Bắc, Thanh Xuân, Hà Nội", "Hạ Đình, Thanh Xuân, Hà Nội", "Thị trấn Sóc Sơn, Sóc Sơn, Hà Nội", "Bắc Sơn, Sóc Sơn, Hà Nội", "Minh Trí, Sóc Sơn, Hà Nội", "Hồng Kỳ, Sóc Sơn, Hà Nội", "Nam Sơn, Sóc Sơn, Hà Nội", "Trung Giã, Sóc Sơn, Hà Nội", "Tân Hưng, Sóc Sơn, Hà Nội", "Minh Phú, Sóc Sơn, Hà Nội", "Phù Linh, Sóc Sơn, Hà Nội", "Bắc Phú, Sóc Sơn, Hà Nội", "Tân Minh, Sóc Sơn, Hà Nội", "Quang Tiến, Sóc Sơn, Hà Nội", "Hiền Ninh, Sóc Sơn, Hà Nội", "Tân Dân, Sóc Sơn, Hà Nội", "Tiên Dược, Sóc Sơn, Hà Nội", "Việt Long, Sóc Sơn, Hà Nội", "Xuân Giang, Sóc Sơn, Hà Nội", "Mai Đình, Sóc Sơn, Hà Nội", "Đức Hoà, Sóc Sơn, Hà Nội", "Thanh Xuân, Sóc Sơn, Hà Nội", "Đông Xuân, Sóc Sơn, Hà Nội", "Kim Lũ, Sóc Sơn, Hà Nội", "Phú Cường, Sóc Sơn, Hà Nội", "Phú Minh, Sóc Sơn, Hà Nội", "Phù Lỗ, Sóc Sơn, Hà Nội", "Xuân Thu, Sóc Sơn, Hà Nội", "Thị trấn Đông Anh, Đông Anh, Hà Nội", "Xuân Nộn, Đông Anh, Hà Nội", "Thuỵ Lâm, Đông Anh, Hà Nội", "Bắc Hồng, Đông Anh, Hà Nội", "Nguyên Khê, Đông Anh, Hà Nội", "Nam Hồng, Đông Anh, Hà Nội", "Tiên Dương, Đông Anh, Hà Nội", "Vân Hà, Đông Anh, Hà Nội", "Uy Nỗ, Đông Anh, Hà Nội", "Vân Nội, Đông Anh, Hà Nội", "Liên Hà, Đông Anh, Hà Nội", "Việt Hùng, Đông Anh, Hà Nội", "Kim Nỗ, Đông Anh, Hà Nội", "Kim Chung, Đông Anh, Hà Nội", "Dục Tú, Đông Anh, Hà Nội", "Đại Mạch, Đông Anh, Hà Nội", "Vĩnh Ngọc, Đông Anh, Hà Nội", "Cổ Loa, Đông Anh, Hà Nội", "Hải Bối, Đông Anh, Hà Nội", "Xuân Canh, Đông Anh, Hà Nội", "Võng La, Đông Anh, Hà Nội", "Tàm Xá, Đông Anh, Hà Nội", "Mai Lâm, Đông Anh, Hà Nội", "Đông Hội, Đông Anh, Hà Nội", "Thị trấn Yên Viên, Gia Lâm, Hà Nội", "Yên Thường, Gia Lâm, Hà Nội", "Yên Viên, Gia Lâm, Hà Nội", "Ninh Hiệp, Gia Lâm, Hà Nội", "Thiên Đức, Gia Lâm, Hà Nội", "Phù Đổng, Gia Lâm, Hà Nội", "Lệ Chi, Gia Lâm, Hà Nội", "Cổ Bi, Gia Lâm, Hà Nội", "Đặng Xá, Gia Lâm, Hà Nội", "Phú Sơn, Gia Lâm, Hà Nội", "Thị trấn Trâu Quỳ, Gia Lâm, Hà Nội", "Dương Quang, Gia Lâm, Hà Nội", "Dương Xá, Gia Lâm, Hà Nội", "Đa Tốn, Gia Lâm, Hà Nội", "Kiêu Kỵ, Gia Lâm, Hà Nội", "Bát Tràng, Gia Lâm, Hà Nội", "Kim Đức, Gia Lâm, Hà Nội", "Cầu Diễn, Nam Từ Liêm, Hà Nội", "Xuân Phương, Nam Từ Liêm, Hà Nội", "Phương Canh, Nam Từ Liêm, Hà Nội", "Mỹ Đình 1, Nam Từ Liêm, Hà Nội", "Mỹ Đình 2, Nam Từ Liêm, Hà Nội", "Tây Mỗ, Nam Từ Liêm, Hà Nội", "Mễ Trì, Nam Từ Liêm, Hà Nội", "Phú Đô, Nam Từ Liêm, Hà Nội", "Đại Mỗ, Nam Từ Liêm, Hà Nội", "Trung Văn, Nam Từ Liêm, Hà Nội", "Thị trấn Văn Điển, Thanh Trì, Hà Nội", "Tân Triều, Thanh Trì, Hà Nội", "Thanh Liệt, Thanh Trì, Hà Nội", "Tả Thanh Oai, Thanh Trì, Hà Nội", "Hữu Hoà, Thanh Trì, Hà Nội", "Tam Hiệp, Thanh Trì, Hà Nội", "Tứ Hiệp, Thanh Trì, Hà Nội", "Yên Mỹ, Thanh Trì, Hà Nội", "Vĩnh Quỳnh, Thanh Trì, Hà Nội", "Ngũ Hiệp, Thanh Trì, Hà Nội", "Duyên Hà, Thanh Trì, Hà Nội", "Ngọc Hồi, Thanh Trì, Hà Nội", "Vạn Phúc, Thanh Trì, Hà Nội", "Đại áng, Thanh Trì, Hà Nội", "Liên Ninh, Thanh Trì, Hà Nội", "Đông Mỹ, Thanh Trì, Hà Nội", "Thượng Cát, Bắc Từ Liêm, Hà Nội", "Liên Mạc, Bắc Từ Liêm, Hà Nội", "Đông Ngạc, Bắc Từ Liêm, Hà Nội", "Đức Thắng, Bắc Từ Liêm, Hà Nội", "Thụy Phương, Bắc Từ Liêm, Hà Nội", "Tây Tựu, Bắc Từ Liêm, Hà Nội", "Xuân Đỉnh, Bắc Từ Liêm, Hà Nội", "Xuân Tảo, Bắc Từ Liêm, Hà Nội", "Minh Khai, Bắc Từ Liêm, Hà Nội", "Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội", "Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội", "Phú Diễn, Bắc Từ Liêm, Hà Nội", "Phúc Diễn, Bắc Từ Liêm, Hà Nội", "Thị trấn Chi Đông, Mê Linh, Hà Nội", "Đại Thịnh, Mê Linh, Hà Nội", "Kim Hoa, Mê Linh, Hà Nội", "Thạch Đà, Mê Linh, Hà Nội", "Tiến Thắng, Mê Linh, Hà Nội", "Tự Lập, Mê Linh, Hà Nội", "Thị trấn Quang Minh, Mê Linh, Hà Nội", "Thanh Lâm, Mê Linh, Hà Nội", "Tam Đồng, Mê Linh, Hà Nội", "Liên Mạc, Mê Linh, Hà Nội", "Chu Phan, Mê Linh, Hà Nội", "Tiến Thịnh, Mê Linh, Hà Nội", "Mê Linh, Mê Linh, Hà Nội", "Văn Khê, Mê Linh, Hà Nội", "Hoàng Kim, Mê Linh, Hà Nội", "Tiền Phong, Mê Linh, Hà Nội", "Tráng Việt, Mê Linh, Hà Nội", "Quang Trung, Hà Đông, Hà Nội", "Mộ Lao, Hà Đông, Hà Nội", "Văn Quán, Hà Đông, Hà Nội", "Vạn Phúc, Hà Đông, Hà Nội", "La Khê, Hà Đông, Hà Nội", "Phú La, Hà Đông, Hà Nội", "Phúc La, Hà Đông, Hà Nội", "Hà Cầu, Hà Đông, Hà Nội", "Yên Nghĩa, Hà Đông, Hà Nội", "Kiến Hưng, Hà Đông, Hà Nội", "Phú Lãm, Hà Đông, Hà Nội", "Phú Lương, Hà Đông, Hà Nội", "Dương Nội, Hà Đông, Hà Nội", "Đồng Mai, Hà Đông, Hà Nội", "Biên Giang, Hà Đông, Hà Nội", "Ngô Quyền, Thị Sơn Tây, Hà Nội", "Phú Thịnh, Thị Sơn Tây, Hà Nội", "Sơn Lộc, Thị Sơn Tây, Hà Nội", "Xuân Khanh, Thị Sơn Tây, Hà Nội", "Đường Lâm, Thị Sơn Tây, Hà Nội", "Viên Sơn, Thị Sơn Tây, Hà Nội", "Xuân Sơn, Thị Sơn Tây, Hà Nội", "Trung Hưng, Thị Sơn Tây, Hà Nội", "Thanh Mỹ, Thị Sơn Tây, Hà Nội", "Trung Sơn Trầm, Thị Sơn Tây, Hà Nội", "Kim Sơn, Thị Sơn Tây, Hà Nội", "Sơn Đông, Thị Sơn Tây, Hà Nội", "Cổ Đông, Thị Sơn Tây, Hà Nội", "Thị trấn Tây Đằng, Ba Vì, Hà Nội", "Phú Cường, Ba Vì, Hà Nội", "Cổ Đô, Ba Vì, Hà Nội", "Vạn Thắng, Ba Vì, Hà Nội", "Phong Vân, Ba Vì, Hà Nội", "Phú Đông, Ba Vì, Hà Nội", "Phú Hồng, Ba Vì, Hà Nội", "Phú Châu, Ba Vì, Hà Nội", "Thái Hòa, Ba Vì, Hà Nội", "Đồng Thái, Ba Vì, Hà Nội", "Phú Sơn, Ba Vì, Hà Nội", "Minh Châu, Ba Vì, Hà Nội", "Vật Lại, Ba Vì, Hà Nội", "Chu Minh, Ba Vì, Hà Nội", "Tòng Bạt, Ba Vì, Hà Nội", "Cẩm Lĩnh, Ba Vì, Hà Nội", "Sơn Đà, Ba Vì, Hà Nội", "Đông Quang, Ba Vì, Hà Nội", "Tiên Phong, Ba Vì, Hà Nội", "Thụy An, Ba Vì, Hà Nội", "Cam Thượng, Ba Vì, Hà Nội", "Thuần Mỹ, Ba Vì, Hà Nội", "Tản Lĩnh, Ba Vì, Hà Nội", "Ba Trại, Ba Vì, Hà Nội", "Minh Quang, Ba Vì, Hà Nội", "Ba Vì, Ba Vì, Hà Nội", "Vân Hòa, Ba Vì, Hà Nội", "Yên Bài, Ba Vì, Hà Nội", "Khánh Thượng, Ba Vì, Hà Nội", "Thị trấn Phúc Thọ, Phúc Thọ, Hà Nội", "Vân Phúc, Phúc Thọ, Hà Nội", "Nam Hà, Phúc Thọ, Hà Nội", "Xuân Đình, Phúc Thọ, Hà Nội", "Sen Phương, Phúc Thọ, Hà Nội", "Võng Xuyên, Phúc Thọ, Hà Nội", "Tích Lộc, Phúc Thọ, Hà Nội", "Long Thượng, Phúc Thọ, Hà Nội", "Hát Môn, Phúc Thọ, Hà Nội", "Thanh Đa, Phúc Thọ, Hà Nội", "Trạch Mỹ Lộc, Phúc Thọ, Hà Nội", "Phúc Hòa, Phúc Thọ, Hà Nội", "Ngọc Tảo, Phúc Thọ, Hà Nội", "Phụng Thượng, Phúc Thọ, Hà Nội", "Tam Thuấn, Phúc Thọ, Hà Nội", "Tam Hiệp, Phúc Thọ, Hà Nội", "Hiệp Thuận, Phúc Thọ, Hà Nội", "Liên Hiệp, Phúc Thọ, Hà Nội", "Thị trấn Phùng, Đan Phượng, Hà Nội", "Trung Châu, Đan Phượng, Hà Nội", "Thọ An, Đan Phượng, Hà Nội", "Thọ Xuân, Đan Phượng, Hà Nội", "Hồng Hà, Đan Phượng, Hà Nội", "Liên Hồng, Đan Phượng, Hà Nội", "Liên Hà, Đan Phượng, Hà Nội", "Hạ Mỗ, Đan Phượng, Hà Nội", "Liên Trung, Đan Phượng, Hà Nội", "Phương Đình, Đan Phượng, Hà Nội", "Thượng Mỗ, Đan Phượng, Hà Nội", "Tân Hội, Đan Phượng, Hà Nội", "Tân Lập, Đan Phượng, Hà Nội", "Đan Phượng, Đan Phượng, Hà Nội", "Đồng Tháp, Đan Phượng, Hà Nội", "Song Phượng, Đan Phượng, Hà Nội", "Thị trấn Trạm Trôi, Hoài Đức, Hà Nội", "Đức Thượng, Hoài Đức, Hà Nội", "Minh Khai, Hoài Đức, Hà Nội", "Dương Liễu, Hoài Đức, Hà Nội", "Di Trạch, Hoài Đức, Hà Nội", "Đức Giang, Hoài Đức, Hà Nội", "Cát Quế, Hoài Đức, Hà Nội", "Kim Chung, Hoài Đức, Hà Nội", "Yên Sở, Hoài Đức, Hà Nội", "Sơn Đồng, Hoài Đức, Hà Nội", "Vân Canh, Hoài Đức, Hà Nội", "Đắc Sở, Hoài Đức, Hà Nội", "Lại Yên, Hoài Đức, Hà Nội", "Tiền Yên, Hoài Đức, Hà Nội", "Song Phương, Hoài Đức, Hà Nội", "An Khánh, Hoài Đức, Hà Nội", "An Thượng, Hoài Đức, Hà Nội", "Vân Côn, Hoài Đức, Hà Nội", "La Phù, Hoài Đức, Hà Nội", "Đông La, Hoài Đức, Hà Nội", "Đông Xuân, Quốc Oai, Hà Nội", "Thị trấn Quốc Oai, Quốc Oai, Hà Nội", "Sài Sơn, Quốc Oai, Hà Nội", "Phượng Sơn, Quốc Oai, Hà Nội", "Ngọc Liệp, Quốc Oai, Hà Nội", "Ngọc Mỹ, Quốc Oai, Hà Nội", "Thạch Thán, Quốc Oai, Hà Nội", "Đồng Quang, Quốc Oai, Hà Nội", "Phú Cát, Quốc Oai, Hà Nội", "Tuyết Nghĩa, Quốc Oai, Hà Nội", "Liệp Nghĩa, Quốc Oai, Hà Nội", "Cộng Hòa, Quốc Oai, Hà Nội", "Hưng Đạo, Quốc Oai, Hà Nội", "Phú Mãn, Quốc Oai, Hà Nội", "Cấn Hữu, Quốc Oai, Hà Nội", "Hòa Thạch, Quốc Oai, Hà Nội", "Đông Yên, Quốc Oai, Hà Nội", "Yên Trung, Thạch Thất, Hà Nội", "Yên Bình, Thạch Thất, Hà Nội", "Tiến Xuân, Thạch Thất, Hà Nội", "Thị trấn Liên Quan, Thạch Thất, Hà Nội", "Đại Đồng, Thạch Thất, Hà Nội", "Cẩm Yên, Thạch Thất, Hà Nội", "Lại Thượng, Thạch Thất, Hà Nội", "Phú Kim, Thạch Thất, Hà Nội", "Hương Ngải, Thạch Thất, Hà Nội", "Lam Sơn, Thạch Thất, Hà Nội", "Kim Quan, Thạch Thất, Hà Nội", "Bình Yên, Thạch Thất, Hà Nội", "Thạch Hoà, Thạch Thất, Hà Nội", "Cần Kiệm, Thạch Thất, Hà Nội", "Phùng Xá, Thạch Thất, Hà Nội", "Tân Xã, Thạch Thất, Hà Nội", "Thạch Xá, Thạch Thất, Hà Nội", "Quang Trung, Thạch Thất, Hà Nội", "Hạ Bằng, Thạch Thất, Hà Nội", "Đồng Trúc, Thạch Thất, Hà Nội", "Thị trấn Chúc Sơn, Chương Mỹ, Hà Nội", "Thị trấn Xuân Mai, Chương Mỹ, Hà Nội", "Phụng Châu, Chương Mỹ, Hà Nội", "Tiên Phương, Chương Mỹ, Hà Nội", "Đông Sơn, Chương Mỹ, Hà Nội", "Đông Phương Yên, Chương Mỹ, Hà Nội", "Phú Nghĩa, Chương Mỹ, Hà Nội", "Trường Yên, Chương Mỹ, Hà Nội", "Ngọc Hòa, Chương Mỹ, Hà Nội", "Thủy Xuân Tiên, Chương Mỹ, Hà Nội", "Thanh Bình, Chương Mỹ, Hà Nội", "Trung Hòa, Chương Mỹ, Hà Nội", "Đại Yên, Chương Mỹ, Hà Nội", "Thụy Hương, Chương Mỹ, Hà Nội", "Tốt Động, Chương Mỹ, Hà Nội", "Lam Điền, Chương Mỹ, Hà Nội", "Tân Tiến, Chương Mỹ, Hà Nội", "Nam Phương Tiến, Chương Mỹ, Hà Nội", "Hợp Đồng, Chương Mỹ, Hà Nội", "Hoàng Văn Thụ, Chương Mỹ, Hà Nội", "Hoàng Diệu, Chương Mỹ, Hà Nội", "Hữu Văn, Chương Mỹ, Hà Nội", "Quảng Bị, Chương Mỹ, Hà Nội", "Mỹ Lương, Chương Mỹ, Hà Nội", "Thượng Vực, Chương Mỹ, Hà Nội", "Hồng Phú, Chương Mỹ, Hà Nội", "Trần Phú, Chương Mỹ, Hà Nội", "Văn Võ, Chương Mỹ, Hà Nội", "Đồng Lạc, Chương Mỹ, Hà Nội", "Hòa Phú, Chương Mỹ, Hà Nội", "Thị trấn Kim Bài, Thanh Oai, Hà Nội", "Cự Khê, Thanh Oai, Hà Nội", "Bích Hòa, Thanh Oai, Hà Nội", "Mỹ Hưng, Thanh Oai, Hà Nội", "Cao Viên, Thanh Oai, Hà Nội", "Bình Minh, Thanh Oai, Hà Nội", "Tam Hưng, Thanh Oai, Hà Nội", "Thanh Cao, Thanh Oai, Hà Nội", "Thanh Thùy, Thanh Oai, Hà Nội", "Thanh Mai, Thanh Oai, Hà Nội", "Thanh Văn, Thanh Oai, Hà Nội", "Đỗ Động, Thanh Oai, Hà Nội", "Kim An, Thanh Oai, Hà Nội", "Kim Thư, Thanh Oai, Hà Nội", "Phương Trung, Thanh Oai, Hà Nội", "Tân Ước, Thanh Oai, Hà Nội", "Dân Hòa, Thanh Oai, Hà Nội", "Liên Châu, Thanh Oai, Hà Nội", "Cao Xuân Dương, Thanh Oai, Hà Nội", "Hồng Dương, Thanh Oai, Hà Nội", "Thị trấn Thường Tín, Thường Tín, Hà Nội", "Ninh Sở, Thường Tín, Hà Nội", "Nhị Khê, Thường Tín, Hà Nội", "Duyên Thái, Thường Tín, Hà Nội", "Khánh Hà, Thường Tín, Hà Nội", "Hòa Bình, Thường Tín, Hà Nội", "Văn Bình, Thường Tín, Hà Nội", "Hiền Giang, Thường Tín, Hà Nội", "Hồng Vân, Thường Tín, Hà Nội", "Vân Tảo, Thường Tín, Hà Nội", "Liên Phương, Thường Tín, Hà Nội", "Văn Phú, Thường Tín, Hà Nội", "Tự Nhiên, Thường Tín, Hà Nội", "Tiền Phong, Thường Tín, Hà Nội", "Hà Hồi, Thường Tín, Hà Nội", "Nguyễn Trãi, Thường Tín, Hà Nội", "Quất Động, Thường Tín, Hà Nội", "Chương Dương, Thường Tín, Hà Nội", "Tân Minh, Thường Tín, Hà Nội", "Lê Lợi, Thường Tín, Hà Nội", "Thắng Lợi, Thường Tín, Hà Nội", "Dũng Tiến, Thường Tín, Hà Nội", "Nghiêm Xuyên, Thường Tín, Hà Nội", "Tô Hiệu, Thường Tín, Hà Nội", "Văn Tự, Thường Tín, Hà Nội", "Vạn Nhất, Thường Tín, Hà Nội", "Minh Cường, Thường Tín, Hà Nội", "Thị trấn Phú Minh, Phú Xuyên, Hà Nội", "Thị trấn Phú Xuyên, Phú Xuyên, Hà Nội", "Hồng Minh, Phú Xuyên, Hà Nội", "Phượng Dực, Phú Xuyên, Hà Nội", "Nam Tiến, Phú Xuyên, Hà Nội", "Văn Hoàng, Phú Xuyên, Hà Nội", "Phú Túc, Phú Xuyên, Hà Nội", "Hồng Thái, Phú Xuyên, Hà Nội", "Hoàng Long, Phú Xuyên, Hà Nội", "Nam Phong, Phú Xuyên, Hà Nội", "Tân Dân, Phú Xuyên, Hà Nội", "Quang Hà, Phú Xuyên, Hà Nội", "Chuyên Mỹ, Phú Xuyên, Hà Nội", "Khai Thái, Phú Xuyên, Hà Nội", "Phúc Tiến, Phú Xuyên, Hà Nội", "Vân Từ, Phú Xuyên, Hà Nội", "Tri Thủy, Phú Xuyên, Hà Nội", "Đại Xuyên, Phú Xuyên, Hà Nội", "Phú Yên, Phú Xuyên, Hà Nội", "Bạch Hạ, Phú Xuyên, Hà Nội", "Quang Lãng, Phú Xuyên, Hà Nội", "Châu Can, Phú Xuyên, Hà Nội", "Minh Tân, Phú Xuyên, Hà Nội", "Thị trấn Vân Đình, Ứng Hòa, Hà Nội", "Hoa Viên, Ứng Hòa, Hà Nội", "Quảng Phú Cầu, Ứng Hòa, Hà Nội", "Trường Thịnh, Ứng Hòa, Hà Nội", "Liên Bạt, Ứng Hòa, Hà Nội", "Cao Sơn Tiến, Ứng Hòa, Hà Nội", "Phương Tú, Ứng Hòa, Hà Nội", "Trung Tú, Ứng Hòa, Hà Nội", "Đồng Tân, Ứng Hòa, Hà Nội", "Tảo Dương Văn, Ứng Hòa, Hà Nội", "Thái Hòa, Ứng Hòa, Hà Nội", "Minh Đức, Ứng Hòa, Hà Nội", "Trầm Lộng, Ứng Hòa, Hà Nội", "Kim Đường, Ứng Hòa, Hà Nội", "Hòa Phú, Ứng Hòa, Hà Nội", "Đại Hùng, Ứng Hòa, Hà Nội", "Đông Lỗ, Ứng Hòa, Hà Nội", "Phù Lưu, Ứng Hòa, Hà Nội", "Đại Cường, Ứng Hòa, Hà Nội", "Bình Lưu Quang, Ứng Hòa, Hà Nội", "Thị trấn Đại Nghĩa, Mỹ Đức, Hà Nội", "Đồng Tâm, Mỹ Đức, Hà Nội", "Thượng Lâm, Mỹ Đức, Hà Nội", "Tuy Lai, Mỹ Đức, Hà Nội", "Phúc Lâm, Mỹ Đức, Hà Nội", "Mỹ Xuyên, Mỹ Đức, Hà Nội", "An Mỹ, Mỹ Đức, Hà Nội", "Hồng Sơn, Mỹ Đức, Hà Nội", "Lê Thanh, Mỹ Đức, Hà Nội", "Xuy Xá, Mỹ Đức, Hà Nội", "Phùng Xá, Mỹ Đức, Hà Nội", "Phù Lưu Tế, Mỹ Đức, Hà Nội", "Đại Hưng, Mỹ Đức, Hà Nội", "Vạn Tín, Mỹ Đức, Hà Nội", "Hương Sơn, Mỹ Đức, Hà Nội", "Hùng Tiến, Mỹ Đức, Hà Nội", "An Tiến, Mỹ Đức, Hà Nội", "Hợp Tiến, Mỹ Đức, Hà Nội", "Hợp Thanh, Mỹ Đức, Hà Nội", "An Phú, Mỹ Đức, Hà Nội"]


function generateRealisticEmail() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    function randomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function randomString(length) {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        return result;
    }

    function randomNumber(length = 2) {
        return Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
    }

    const separators = ["", ".", "_"];
    const separator = randomElement(separators);
    const number = Math.random() < 0.5 ? randomNumber(2) : ""; // 50% có số

    const userPart1 = randomString(Math.floor(Math.random() * 4) + 4); // 4–7 ký tự
    const userPart2 = randomString(Math.floor(Math.random() * 4) + 3); // 3–6 ký tự
    const username = `${userPart1}${separator}${userPart2}${number}`;

    const domainName = randomString(Math.floor(Math.random() * 5) + 5); // 5–9 ký tự
    const domainExt = randomElement(["com", "net", "org", "info", "site"]);
    const domain = `${domainName}.${domainExt}`;

    return `${username}@${domain}`;
}



// Generate Vietnamese phone number
function generateVietnamPhoneNumber() {
    const prefixes = ["09"]; // Gmobile
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Array(8).fill().map(() => Math.floor(Math.random() * 10)).join('');
    return prefix + suffix;
}

// Generate Vietnamese name
function generateVietnameseName() {
    const familyNames = [
        "Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng",
        "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý", "Tạ", "Đinh", "Trịnh", "Mai", "Hà",
        "La", "Chu", "Cao", "Thái", "Kiều", "Tô", "Lâm", "Quách",
        "Trương", "Lương", "Vương", "Đoàn", "Quang", "Cung", "Tống", "Triệu", 
        "Nghiêm", "Bạch", "Vi", "Giang", "Nguyễn Thị", "Lưu", "Liêu", "Thạch", "Châu", 
        "Hứa", "Phùng", "Tiêu", "Tăng", "Âu Dương", "Mạc", "Trà"
    ];

    const middleNames = [
        "Văn", "Hữu", "Đức", "Công", "Ngọc", "Thị", "Minh", "Gia", "Thanh", "Trọng",
        "Anh", "Quang", "Xuân", "Tiến", "Thành", "Tấn", "Thế", "Nhật", "Bảo", "Diệu",
        "Mạnh", "Khánh", "Thùy", "Phương", "Vĩnh", "Phúc", "Đình", "Thiện",
        "Chí", "Tuấn", "Kim", "Lan", "Hải", "Trí", "Thảo", "Thu", "Mai", "Diễm",
        "Tú", "Ngân", "Yến", "Như", "Tường", "Việt", "Đan", "Thi", "An", "Linh",
        "Tâm", "Cẩm", "Hương", "Hòa", "Lệ", "Thắm", "Quỳnh", "Thục", "Tiểu", "Uyên"
    ];

    const givenNames = [
        "An", "Bình", "Chi", "Dũng", "Hà", "Hạnh", "Hải", "Hiếu", "Hương", "Hùng",
        "Khoa", "Khôi", "Lan", "Linh", "Mai", "Nam", "Phong", "Phúc", "Quân", "Quỳnh",
        "Sơn", "Tâm", "Thảo", "Thắng", "Thịnh", "Trang", "Trung", "Tú", "Tuấn", "Vy",
        "Anh", "Thư", "Hải", "Long", "Tiến", "Ngân", "Thúy", "Lộc", "Tín", "Loan",
        "Nhung", "Kim", "Diễm", "Yến", "Tường", "Việt", "Châu", "Vân", "Bảo", "Nhi",
        "Đạt", "Kiên", "Cường", "Hạo", "Tài", "Khánh", "Thái", "Trí", "Phát", "Toàn",
        "Duy", "Đức", "Khang", "Thiện", "Lâm", "Hậu", "Tiểu", "Hoa", "Thắm", "Oanh",
        "Trâm", "Ngọc", "Thục", "Hân", "Giang", "My", "Di", "Thu", "Hòa", "Minh",
        "Tú", "Uyên", "Thương", "Lệ", "Tuyến", "Trang", "Như", "Tịnh", "Thúy An", "Bích"
    ];

    const family = familyNames[Math.floor(Math.random() * familyNames.length)];
    const middle = middleNames[Math.floor(Math.random() * middleNames.length)];
    const given = givenNames[Math.floor(Math.random() * givenNames.length)];

    return [family, middle, given];
}

// Zipcodes for provinces
const tinhZipcodes = { "Hà Nội": "100000", "Hồ Chí Minh": "700000"
};

// Province codes
const maTinhDict = {
    "Hồ Chí Minh": "079"
};
//"Hồ Chí Minh": "079",
//     "Hà Nội": "001"
// Generate random birthdate in a given year
function generateRandomBirthdate(year) {
    // Create start and end dates for the given year
    const startDate = new Date(year, 0, 1); // January 1st
    const endDate = new Date(year, 11, 31); // December 31st
    const deltaDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    const randomDays = Math.floor(Math.random() * (deltaDays + 1));
    const randomDate = new Date(startDate);
    randomDate.setDate(startDate.getDate() + randomDays);
    const month = String(randomDate.getMonth() + 1).padStart(2, '0');
    const day = String(randomDate.getDate()).padStart(2, '0');
    const yearStr = randomDate.getFullYear();
    return `${month}${day}${yearStr}`;
}

// Generate random number text
function generateRandomNumberText() {
    if (Math.random() < 0.5) {
        return String(Math.floor(Math.random() * 99) + 1);
    } else {
        const num1 = Math.floor(Math.random() * 99) + 1;
        const num2 = Math.floor(Math.random() * 99) + 1;
        return `${num1}/${num2}`;
    }
}

// Generate random address
function generateRandomAddress(provinceName) {
    let provinceData = null 
    if (provinceName === "Hồ Chí Minh") provinceData = hcm
    else if (provinceName === "Hà Nội") provinceData = hn
    if (provinceData.length > 0) {
        const randomRow = provinceData[Math.floor(Math.random() * provinceData.length)];
        const addressLine = `${Math.floor(Math.random() * 99) + 1} đường ${generateRandomNumberText()}, ${randomRow}`;
        const town = randomRow.split(", ")[1];
        return [addressLine, town];
    }
    return [null, null];
}

// Generate CCCD
function generateCccd() {
    const tinh = Object.keys(maTinhDict)[Math.floor(Math.random() * Object.keys(maTinhDict).length)];
    const maTinh = maTinhDict[tinh];
    const [address, town] = generateRandomAddress(tinh);
    const gioiTinh = Math.random() < 0.5 ? "2" : "3"; // 2 for Male, 3 for Female
    const ns = String(2000 + Math.floor(Math.random() * 5) + 1); // 2001 to 2005
    const namSinh = ns.slice(-2); // Last 2 digits
    const soCuoi = Array(6).fill().map(() => Math.floor(Math.random() * 10)).join('');
    const cccd = maTinh + gioiTinh + namSinh + soCuoi;
    const [family, middle, given] = generateVietnameseName();
    const sdt = generateVietnamPhoneNumber();
    return {
        "cccd" : cccd,
        "tinh": tinh,
        "gioi_tinh": gioiTinh,
        "birth" : generateRandomBirthdate(ns),
        "tinh_zip" : tinhZipcodes[tinh],
        "address" : address,
        "town" : town,
        "family" : family,
        "middle" : middle,
        "given" : given,
        "sdt" : sdt,
        "email" : generateRealisticEmail()
    }
}

module.exports =  generateCccd