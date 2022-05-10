const path = require('path');
const fse = require('fs-extra');

generatePackageJson();

function generatePackageJson() {
  return new Promise((resolve) => {
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
    .then((data) => JSON.parse(data))
    .then((packageData) => {
      const { author, version, peerDependencies, license, dependencies } = packageData;

      const minimalPackage = {
        ...packageData,
        scripts: {},
      };

      return new Promise((resolve) => {
        const libPath = path.resolve(__dirname, '../lib/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(libPath, data, (err) => {
          if (err) {
            console.log(err);
            throw err;
          }
          console.log(`Created package.json in ${libPath}`);
          resolve();
        });
      });
    });
}
