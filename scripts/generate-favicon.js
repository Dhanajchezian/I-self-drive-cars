const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

(async () => {
  try {
    const svgPath = path.join(__dirname, '..', 'public', 'favicon.svg');
    const outPath = path.join(__dirname, '..', 'public', 'favicon.ico');
    const sizes = [16, 32, 48, 64, 128];

    const pngBuffers = await Promise.all(
      sizes.map(size => sharp(svgPath).resize(size, size).png().toBuffer())
    );

    const icoBuffer = await pngToIco(pngBuffers);
    fs.writeFileSync(outPath, icoBuffer);
    console.log('Created:', outPath);
  } catch (err) {
    console.error('Error creating favicon.ico:', err);
    process.exit(1);
  }
})();