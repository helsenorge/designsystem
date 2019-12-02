const fs = require('fs-extra');
const path = require('path');

function copySCSSFiles() {
  const distDir = path.resolve(__dirname, '../dist/scss');
  const srcDir = path.resolve(__dirname, '../src');
  fs.copySync(srcDir, distDir, {
    filter: (src, dest) => {
      return src.match(/fonts\b[^.scss]/g) ? false : true;
    },
  });
  // The copy function still creates an unnecessary fonts folder
  fs.rmdirSync(path.join(distDir, '/fonts'));
}

function copyFonts() {
  const distDir = path.resolve(__dirname, '../dist/fonts');
  const srcDir = path.resolve(__dirname, '../src/fonts');
  fs.copySync(srcDir, distDir);
}

function copyIcons() {
  const distDir = path.resolve(__dirname, '../dist/icons');
  const srcDir = path.resolve(__dirname, '../src/icons');
  fs.copySync(srcDir, distDir);
}

function transformFontFacePath() {
  const filePath = path.resolve(__dirname, '../dist/scss/base/fonts.scss');
  const contents = fs.readFileSync(filePath, 'utf8', (data, err) => data.toString());
  const transformedContents = contents.replace(/\.\.\//g, '../../');
  fs.writeFileSync(filePath, transformedContents, 'utf8');
}

function transformIconFontFacePath() {
  const filePath = path.resolve(__dirname, '../dist/scss/base/icons.scss');
  const contents = fs.readFileSync(filePath, 'utf8', (data, err) => data.toString());
  let transformedContents = contents.replace(/\.\.\//g, '../../');
  transformedContents = transformedContents.replace(/\?[a-f0-9]{32}/g, '');
  fs.writeFileSync(filePath, transformedContents, 'utf8');
}

copySCSSFiles();
copyFonts();
copyIcons();
transformFontFacePath();
transformIconFontFacePath();
