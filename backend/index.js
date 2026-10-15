const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Thư viện đọc/ghi file có sẵn của Node.js

// Khởi tạo ứng dụng Express (nhà bếp)
const app = express();
app.use(cors());
app.use(express.json());

// Tạo file dữ liệu cục bộ nếu chưa tồn tại
const dbFile = './database.json';
if (!fs.existsSync(dbFile)) {
    // Tạo sẵn 2 "phòng" chứa Sản phẩm và Đơn hàng
    fs.writeFileSync(dbFile, JSON.stringify({ products: [], orders: [] }));
    console.log('📦 Đã tạo file database.json cục bộ!');
}

// Cổng test API
app.get('/', (req, res) => {
    res.send('🟢 Server Offline đã chạy! Dữ liệu đang được lưu tại máy tính.');
});

// ==========================================
// CÁC HÀM HỖ TRỢ ĐỌC/GHI DỮ LIỆU
// ==========================================
const readData = () => JSON.parse(fs.readFileSync(dbFile));
const writeData = (data) => fs.writeFileSync(dbFile, JSON.stringify(data, null, 2));

// ==========================================
// API SẢN PHẨM (PRODUCTS)
// ==========================================

// 1. Lấy danh sách tất cả sản phẩm (Dành cho màn hình Quản lý)
app.get('/api/products', (req, res) => {
    const db = readData();
    res.json(db.products);
});

// 2. Thêm sản phẩm mới (Dành cho Quản lý khi nhập kho)
app.post('/api/products', (req, res) => {
    const db = readData();
    const newProduct = req.body; // Gồm: barcode, name, price, stock, isQuickAdd

    // Kiểm tra xem mã vạch đã tồn tại chưa để tránh trùng lặp
    const isExist = db.products.find(p => p.barcode === newProduct.barcode);
    if (isExist) {
        return res.status(400).json({ message: 'Mã vạch này đã tồn tại trong kho!' });
    }

    db.products.push(newProduct);
    writeData(db); // Lưu thẳng vào file database.json
    res.status(201).json({ message: 'Thêm sản phẩm thành công!', product: newProduct });
});

// 3. Tìm sản phẩm theo mã vạch (Dành cho Thu ngân khi camera quét thành công)
app.get('/api/products/:barcode', (req, res) => {
    const db = readData();
    const product = db.products.find(p => p.barcode === req.params.barcode);
    
    if (!product) {
        return res.status(404).json({ message: 'Không tìm thấy sản phẩm!' });
    }
    res.json(product);
});

// Bật máy chủ tại cổng 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy offline cực mượt tại cổng ${PORT}`);
});