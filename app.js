const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Kết nối tới MongoDB

// Tải các biến môi trường từ file .env
dotenv.config();

// Khởi tạo ứng dụng Express
const app = express();

// Kết nối tới MongoDB
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection failed', err.message);
  });

// Middleware để xử lý CORS và JSON
app.use(cors());
app.use(express.json());

// Định nghĩa route cho đường dẫn gốc '/'
app.get('/', (req, res) => {
  res.send('API is running on port 27018');
});

// Xử lý lỗi 404 cho các route không tồn tại
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Xử lý lỗi 500 cho các lỗi khác
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

module.exports = app;
