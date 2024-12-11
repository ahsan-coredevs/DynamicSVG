// server.js

const http = require('http');
const testSvg = require('./testSvg'); 

const server = http.createServer((req, res) => {

  const dynamicValues = {
    invest: "4563",
    sold: "2342",
    profit: "2896",
    percentage: "222.22",
  };

  const updatedSvg = testSvg(dynamicValues);

  res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
  res.end(updatedSvg);
});


server.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
