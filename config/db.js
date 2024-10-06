const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Loại bỏ các tùy chọn deprecated
    console.log('MongoDB connected on port 27018');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Thoát chương trình nếu kết nối thất bại
  }
};

module.exports = connectDB;
