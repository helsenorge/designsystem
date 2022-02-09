/*
  Scriptet går gjennom alle komponenter under /components og
  og genererer en .json fil som brukes videre av rollup for å lage entries
*/

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const docgen = require('react-docgen-typescript');
const glob = require('glob');

const paths = {
  src: path.join('src'),
  components: path.join('src', 'components'),
  icons: path.join('src', 'components/Icons'),
  output: path.join('scripts', 'componentsEntries.json'),
};

const { parse } = docgen.withCustomConfig('./tsconfig.json', {
  propFilter: {
    skipPropsWithName: ['ref', 'key'],
  },
  savePropValueAsString: true,
  shouldRemoveUndefinedFromOptional: true,
  shouldExtractLiteralValuesFromEnum: true,
});

// Generate component metadata
generate(paths);

function generate(paths) {
  let componentsEntries = {};

  // running through components and icons
  getComponents(paths.components, (files, err) => {
    if (err) {
      console.log(chalk.red(err));
    } else {
      // 1. Skriv componentsEntries.json
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
      // 2. Skriv componentdata.json for hver komponent
      files
        // Ignorer alle ikoner utenom <Icon>-komponenten
        .filter(file => file.endsWith('.tsx') && (!file.includes('/Icons') || file.includes('/Icons/Icon')))
        .forEach(file => {
          const [{ props = {} } = {}] = parse(file);
          const directory = path.dirname(file);
          fs.writeFileSync(`${directory}/componentdata.json`, JSON.stringify({ props }, null, 2) + '\n');
        });
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
    `${pathToFolder}/**/*.*`,
    {
      ignore: [
        '**/__snapshots__',
        '**/__snapshots__/*',
        '**/*.stories.tsx',
        '**/*.scss',
        '**/*.scss.d.ts',
        '**/*.test.tsx',
        '**/*Utils.tsx',
        `${pathToFolder}/Icon.*`,
        '**/*.json',
      ],
    },
    (err, files) => {
      console.log('processing files:', files.length);
      fn(files, err);
    }
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
    } else if (componentPath.includes('Icons')) {
      // returns the name of the icon with 'icons/' prefix if the component under Icons/
      name = `components/Icons/${arr2[arr2.length - 1]}`;
    } else if (componentPath.includes('/components/')) {
      // returns the name of the component with 'components/' prefix and 'index' suffix if the file is under /components
      name = `components/${arr2[arr2.length - 2]}/index`;
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
