const path = require('path');
const fs = require('fs');
const additionalInfo = require('@helsenorge/designsystem-react/components/Icons/AdditionalIconInformation.js');

let singleIconModulesImports = '';
let arrayOfIconModules = '\r\n\r\nexport const allSvgIcons = [';

const pathToIcons = './node_modules/@helsenorge/designsystem-react/components/Icons';
const finalFileName = 'allIconsImports.tsx';

// This script loops through all icons in designsystem components/Icons and creates a file with
// re-export of all default imports for each icon
// export of an Array with all the modules and respective names
console.log('Running generate-icon-imports. Getting icons from: ', pathToIcons);

fs.readdir(pathToIcons, (err, files) => {
  const arrayOfModules = [];
  if (err) {
    console.error('ERROR in generate-icon-imports.js while attempting to create ' + finalFileName, err);
  }
  if (files.length > 0) {
    const sorted = files.sort();
    sorted.forEach(file => {
      if (file.endsWith('.js') && file !== 'Icon.js' && file !== 'index.js' && file !== 'AdditionalIconInformation.js') {
        const fileName = file.replace(/\.[^/.]+$/, '');
        const iconFile = '@helsenorge/designsystem-react/components/Icons/' + fileName;
        console.log('generating import for', iconFile);

        singleIconModulesImports =
          singleIconModulesImports + `import ${fileName}_ from '${iconFile}';\r\nexport const ${fileName} = ${fileName}_;\r\n`;
        arrayOfIconModules = `${arrayOfIconModules} { module: ${fileName}, name: "${fileName}", alternativeName: "${
          additionalInfo[fileName.toLowerCase()] ? additionalInfo[fileName.toLowerCase()].alternativeName : ''
        }", categories: "${additionalInfo[fileName.toLowerCase()] ? additionalInfo[fileName.toLowerCase()].categories : ''}", },`;
      }
    });
    arrayOfIconModules = arrayOfIconModules.slice(0, -1) + '];';

    fs.writeFile('./src/components/markdown/MDXCustom/IconWall/' + finalFileName, singleIconModulesImports + arrayOfIconModules, function(
      err
    ) {
      err ? console.log('Error when writing file', err) : console.log('Generating icon imports completed.');
    });
  }
});
