// svgUtils.js

const fs = require('fs');
const path = require('path');

function testSvg({ invest, sold, profit, percentage }) {
  const filePath = path.join(__dirname, './textSvg.svg');
  
  const svgTemplate = fs.readFileSync(filePath, 'utf8');

  return svgTemplate
    .replace('{invest}', invest)
    .replace('{sold}', sold)
    .replace('{profit}', profit)
    .replace('{percentage}', percentage);
}

// Export the function
module.exports = testSvg; 
