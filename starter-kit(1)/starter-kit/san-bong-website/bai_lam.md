# BÀI LÀM – HACKATHON 02

- **Mã đề:** 01
- **Họ tên:** Nguyễn Trung Thành
- **Lớp:** B26DTCN106
- **Link repository:**
- **Hệ điều hành (Windows/macOS):** Windows

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
Get-Location
Get-ChildItem -Force
Move-Item ghi_chu_ban_giao.txt docs/
mkdir backup
Copy-Item data/dat_san_thang_10.xlsx backup/
Remove-Item *.tmp
cd logs; Get-ChildItem; cd ..

```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
PS C:\Users\OS\Downloads\starter-kit(1)\starter-kit\san-bong-website>  Get-ChildItem -Recurse -Force


    Directory: C:\Users\OS\Downloads\starter-kit(1)\starter-kit\san-bong-website


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         11/3/2026   1:52 PM                data
d-----         11/3/2026   1:51 PM                docs
d-----         11/3/2026   1:51 PM                evidence
d-----         11/3/2026   1:56 PM                logs
d-----         11/3/2026   1:47 PM                web
-a----         11/3/2026   1:47 PM             76 .env
-a----         11/3/2026   1:47 PM           2409 bai_lam.md
-a----         11/3/2026   1:47 PM            154 ghi_chu_ban_giao.txt
-a----         11/3/2026   1:47 PM             22 temp_002.tmp


    Directory: C:\Users\OS\Downloads\starter-kit(1)\starter-kit\san-bong-website\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   1:47 PM           6074 dat_san_thang_10.xlsx


    Directory: C:\Users\OS\Downloads\starter-kit(1)\starter-kit\san-bong-website\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   1:47 PM            956 access.log
-a----         11/3/2026   1:55 PM            312 loi_500.txt
-a----         11/3/2026   1:56 PM            472 tong_hop.txt


    Directory: C:\Users\OS\Downloads\starter-kit(1)\starter-kit\san-bong-website\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         11/3/2026   1:47 PM                images
-a----         11/3/2026   1:47 PM            590 app.js
-a----         11/3/2026   1:47 PM            529 index.html
-a----         11/3/2026   1:47 PM            460 style.css


    Directory: C:\Users\OS\Downloads\starter-kit(1)\starter-kit\san-bong-website\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   1:47 PM           3101 logo-san-bong.png
```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
Get-Content logs/access.log | Select-String "status=500" | Set-Content logs/loi_500.txt

```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
2026-10-28 08:15:20 GET /api/dat-san status=500
2026-10-28 08:22:41 POST /api/thanh-toan status=500

```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
(Get-Content logs/access.log | Select-String "status=404").Count

```

```text
4

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\tong_hop.ps1

```

### Nội dung file logs/tong_hop.txt

```text
=== BAO CAO SU CO WEBSITE ===
2026-10-28 08:07:39 GET /tin-tuc status=404
2026-10-28 08:13:01 GET /dat-san-cu status=404
2026-10-28 08:34:07 GET /images/san-7.jpg status=404
2026-10-28 08:57:24 GET /khuyen-mai status=404

6

```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 | Network | `logo.png` (Lỗi 404 Not Found) | Sửa lại đường dẫn tên file ảnh trong `web/index.html` cho khớp với tên thực tế trong thư mục `web/images/`. |
| 2 | Console | `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')` | Kiểm tra lại cú pháp DOM hoặc ID của phần tử trong file `app.js`. |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** Khi mở trang web `web/index.html` trên trình duyệt Chrome, giao diện phần script tương tác không hoạt động.
- **Expected:** Trang web tải đầy đủ các thành phần giao diện và kịch bản JavaScript chạy thành công không có ngoại lệ.
- **Actual:** Giao diện bị khựng tính năng và bảng giá trống dữ liệu do script bị ngắt quãng.
- **Log:** 
  ```text
  Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') at app.js:15

### Câu tìm kiếm Google

```text
site:stackoverflow.com "Uncaught TypeError: Cannot read properties of null reading addEventListener"

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/dat_san_thang_10.xlsx`, không cần ghi vào đây.
