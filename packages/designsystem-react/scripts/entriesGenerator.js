/*
  Scriptet går gjennom alle komponenter under /components/Icons
  og genererer en .json fil som brukes videre av rollup for å lage entries
*/

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const glob = require('glob');

const paths = {
  src: path.join(__dirname, '../', 'src'),
  components: path.join(__dirname, '../', 'src', 'components'),
  icons: path.join(__dirname, '../', 'src', 'components/Icons'),
  output: path.join(__dirname, '../', 'scripts', 'componentsEntries.json'),
};

// Generate component metadata
generate(paths);

function generate(paths) {
  let componentsEntries = {};

  // running through components and icons
  getComponents(paths.components, (files, err) => {
    if (err) {
      console.log(chalk.red(err));
    } else {
      const componentsEntriesArr = files.map(file => {
        try {
          return getComponentData(file);
        } catch {
          console.log('ERROR in entriesGenerator');
        }
      });
      const componentsEntriesCleaned = removeEmpty(componentsEntriesArr);
      const componentsEntriesObj = convertToEntryObject(componentsEntriesCleaned);

      componentsEntries = Object.assign(componentsEntries, componentsEntriesObj);
      writeFile(paths.output, JSON.stringify(componentsEntries));
    }
  });
}

function convertToEntryObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; ++i) {
    obj[arr[i].name] = arr[i].path;
  }
  return obj;
}

function getComponents(pathToFolder, fn) {
  glob(
    `${pathToFolder}/**/*`,
    {
      ignore: [
        '**/__snapshots__',
        '**/__snapshots__/*',
        '**/*.stories.tsx',
        '**/*.styled.tsx',
        '**/*.test.tsx',
        `**/Icons/index.ts`,
        `${pathToFolder}/Icon.*`,
      ],
    },
    (err, files) => {
      fn(files, err);
    },
  );
}

function removeEmpty(components) {
  return components.filter(el => el !== undefined);
}

function getComponentName(componentPath) {
  try {
    let name = '';
    const arr1 = componentPath.split('.');
    const pathWithoutExtension = arr1[0];
    const arr2 = pathWithoutExtension.split('/');

    // returns null if the component has the same name as its folder (because then it is index.tsx that should be used)
    if (arr2[arr2.length - 1] === arr2[arr2.length - 2]) {
      name = null;
    } else if (arr2[arr2.length - 1] === 'index') {
      // returns the name of the folder if the file is 'index'
      name = arr2[arr2.length - 2].toLowerCase();
    } else if (componentPath.includes('Icons')) {
      // returns the name of the icon with 'icons/' prefix if the component under Icons/
      name = `icons/${arr2[arr2.length - 1].toLowerCase()}`;
    } else {
      name = arr2[arr2.length - 1].toLowerCase();
    }

    return name;
  } catch {
    console.log('ERROR in entriesGenerator getComponentName for filen', componentPath);
  }
}

function getComponentData(componentPath) {
  try {
    const componentName = getComponentName(componentPath);
    // Checks if componentName returned null to filter out
    if (componentName) {
      return {
        name: componentName,
        path: componentPath.replace(paths.src, 'src'),
      };
    }
  } catch {
    console.log('ERROR in entriesGenerator getComponentData');
  }
}

function writeFile(filepath, content) {
  try {
    fs.writeFile(filepath, content, function(err) {
      err ? console.log(chalk.red(err)) : console.log(chalk.green('Entries for components saved in ' + paths.output));
    });
  } catch {
    console.log('ERROR in entriesGenerator writeFile');
  }
}
