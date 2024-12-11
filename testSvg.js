const fs = require('fs');
const path = require('path');

function testSvg({ heading, invest, sold, profit, percentage }) {

  const filePath = path.join(__dirname, './textSvg.svg');
  const svgTemplate = fs.readFileSync(filePath, 'utf8');

  const updatedSvg = svgTemplate
    .replace('{heading}', heading)
    .replace('{invest}', invest)
    .replace('{sold}', sold)
    .replace('{profit}', profit)
    .replace('{percentage}', percentage);

  const outputDir = path.join(__dirname, './output_svgs');
  const outputFileName = `${heading.toLowerCase()}_stats.svg`;
  const outputPath = path.join(outputDir, outputFileName);


  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fs.writeFileSync(outputPath, updatedSvg, 'utf8');
  console.log(`SVG saved to: ${outputPath}`);

  
  return updatedSvg;
}

module.exports = testSvg;
