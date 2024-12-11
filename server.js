// server.js

const http = require('http');
const testSvg = require('./testSvg'); 

const server = http.createServer((req, res) => {
    if (req.url === '/generate') {
      const dynamicValues = {
        heading: "BitCoin",
        invest: "4563",
        sold: "4342",
        profit: "2896",
        percentage: "222.22",
      };
  
   
      const updatedSvg = testSvg(dynamicValues);
  
      res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
      res.end(updatedSvg);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Invalid endpoint');
    }
  });
  
  server.listen(3001, () => {
    console.log('Server running at http://localhost:3001');
  });