// Import thư viện http
const http = require('http');

// Tạo một máy chủ HTTP
const server = http.createServer((req, res) => {
  // Thiết lập tiêu đề phản hồi HTTP
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200; // Mã trạng thái OK

  // Gửi phản hồi cho trình duyệt
  res.end('Hello, Justin Nguyen!\n');
});

// Lắng nghe cổng 3000 và địa chỉ localhost
const port = 3000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

