const app = require('./app');

const PORT = process.env.PORT || 3000; // Cổng mặc định là 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
