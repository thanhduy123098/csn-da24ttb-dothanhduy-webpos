# Xây dựng hệ thống Web POS di động tích hợp quét mã vạch và thanh toán VietQR

**Đồ án Cơ sở ngành Công nghệ Thông tin**  
**Đơn vị:** Khoa Công nghệ Thông tin – Trường Kỹ thuật và Công nghệ, Đại học Trà Vinh

---

## Thông tin chung

### Sinh viên thực hiện
- **Họ và tên:** Đỗ Thành Duy
- **MSSV:** 110124042
- **Mã lớp:** DA24TTB
- **Email:** 110124042@st.tvu.edu.vn
- **Điện thoại:** 0846 623 306

### Giảng viên hướng dẫn
- **Họ và tên:** Nguyễn Hoàng Duy Thiện
- **Học hàm, học vị:** Thạc sĩ

---

## Giới thiệu đề tài

Tại các cửa hàng bách hóa, tạp hóa có lượng khách hàng lớn, đặc biệt tại những khu vực gần bệnh viện như Bệnh viện Đa khoa Trà Vinh, hoạt động thanh toán tại quầy thu ngân cố định có thể gây ùn tắc và kéo dài thời gian chờ đợi. Bên cạnh đó, số lượng mặt hàng đa dạng cũng khiến nhân viên gặp khó khăn trong việc ghi nhớ giá bán và tính toán đơn hàng thủ công.

Đề tài xây dựng hệ thống Web POS di động theo mô hình BYOD (Bring Your Own Device – sử dụng thiết bị cá nhân), cho phép nhân viên sử dụng điện thoại thông minh hoặc máy tính bảng có camera để hỗ trợ các thao tác bán hàng. Hệ thống tích hợp chức năng quét mã vạch để tra cứu thông tin sản phẩm, quản lý giỏ hàng và tạo mã QR thanh toán VietQR. Qua đó, đề tài hướng đến việc tăng tính linh hoạt trong hoạt động bán hàng và góp phần giảm thời gian chờ đợi của khách hàng.

---

## Tính năng cốt lõi

### 1. Phân hệ bán hàng dành cho nhân viên

- **Quét mã vạch:** Sử dụng camera của thiết bị thông qua trình duyệt để quét mã vạch và tra cứu tên, giá bán sản phẩm từ hệ thống
- **Quản lý giỏ hàng:**
  - Tự động cập nhật số lượng sản phẩm và tổng tiền đơn hàng
  - Hỗ trợ nhập mã sản phẩm thủ công khi mã vạch bị mờ hoặc hư hỏng
  - Hỗ trợ thêm nhanh các mặt hàng không có mã vạch
  - Hỗ trợ hủy giỏ hàng
- **Thanh toán VietQR:** Tạo mã QR thanh toán chứa thông tin tài khoản nhận tiền và số tiền theo đơn hàng, hỗ trợ khách hàng thực hiện thanh toán qua ứng dụng ngân hàng
- **Ứng dụng PWA (Progressive Web App):** Cho phép cài đặt ứng dụng web lên màn hình chính của thiết bị di động, thuận tiện cho việc truy cập và sử dụng

### 2. Phân hệ quản lý dành cho chủ cửa hàng

- **Quản lý hàng hóa cơ bản:** Hỗ trợ tạo mới và cập nhật thông tin sản phẩm, bao gồm tên sản phẩm, giá bán và số lượng tồn kho, phục vụ hoạt động bán hàng

---

## Công nghệ sử dụng

- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **Cơ sở dữ liệu:** MongoDB Atlas
- **Thư viện quét mã vạch:** html5-qrcode
- **API thanh toán:** VietQR API
- **Thiết kế giao diện:** Figma
- **Kiểm thử API:** Thunder Client
- **Quản lý mã nguồn:** Git và GitHub
- **Công nghệ ứng dụng web:** Progressive Web App (PWA)

---

## Cấu trúc thư mục dự án

```text
csn-da24ttb-dothanhduy-webpos/
├── backend/                # Mã nguồn máy chủ Node.js và Express.js
├── frontend/               # Mã nguồn giao diện React và PWA
├── docs/                   # Sơ đồ hệ thống, thiết kế cơ sở dữ liệu và giao diện
├── progress-report/        # Báo cáo tiến độ hàng tuần
├── thesis/                 # Tài liệu báo cáo đồ án
│   ├── doc/                # Tài liệu định dạng DOC/DOCX
│   ├── pdf/                # Đề cương và báo cáo định dạng PDF
│   ├── html/               # Tài liệu định dạng HTML
│   ├── abs/                # Slide thuyết trình và video minh họa
│   ├── refs/               # Tài liệu tham khảo
│   └── soft/               # Phần mềm và công cụ hỗ trợ
├── .gitignore              # Các tệp và thư mục không đưa lên Git
└── README.md               # Tài liệu giới thiệu dự án
```

---

## Phạm vi thực hiện

- Tập trung vào phân hệ bán hàng dành cho nhân viên, từ tra cứu sản phẩm đến quản lý giỏ hàng và tạo mã QR thanh toán
- Xây dựng phân hệ quản lý hàng hóa ở mức cơ bản để phục vụ hoạt động bán hàng
- Sử dụng React để phát triển giao diện và Node.js, Express.js để xây dựng máy chủ
- Sử dụng MongoDB Atlas để lưu trữ và quản lý dữ liệu
- Tích hợp quét mã vạch thông qua camera trình duyệt và tạo mã QR thanh toán VietQR
- Cấu hình PWA để hỗ trợ cài đặt ứng dụng web trên thiết bị di động

---

## Trạng thái dự án

Dự án được thực hiện trong khuôn khổ Đồ án Cơ sở ngành Công nghệ Thông tin. Các chức năng sẽ được triển khai, kiểm thử và hoàn thiện theo kế hoạch thực hiện của đề tài.