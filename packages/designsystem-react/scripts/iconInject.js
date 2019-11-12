const fs = require("fs");
const path = require('path');
const util = require('util');

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

const iconDirectory = path.join(__dirname, '../src/components/Icons');
const fileToInject = path.join(__dirname, '../src/components/Icons/index.ts');

const getImportString = iconName => `import ${iconName} from './${iconName}';`;
const getCompoundString = iconName => `Icon.${iconName} = ${iconName};`;

async function getAllIconNames(cb) {
    return await readDir(iconDirectory, function(err, filenames) {
        let filteredFilenames = [];
        if (err) {
          onError(err);
          cb(filteredFilenames);
        }
        filteredFilenames = filenames
            .filter(filename => filename !== 'index.ts')
            .map(filename => filename.slice(0, filename.length-4));
        
        cb(filteredFilenames);
    })
}

async function removeImportsAndCompounds(iconNames, cb) {
    const importRegex = /^import\s\w+\sfrom\s'.\/\w+';$/;
    const compoundRegex = /^Icon.\w+\s=\s\w+;$/;
    return await fs.readFile(fileToInject, 'utf-8', function(err, data) {
        const lines = data.split('\n');
        let removedLines = lines.filter(line => !line.match(importRegex) && !line.match(compoundRegex));
        iconNames.forEach(iconName => {
            removedLines.unshift(getImportString(iconName));
            removedLines.push(getCompoundString(iconName));
        })
        cb(removedLines)
    })
}

function writeInjectIconsToFile(injectContent) {
    //const applyNewLines = injectContent.map(line => line + '\n');
    var file = fs.createWriteStream(fileToInject);
    file.on('error', function(err) { /* error handling */ });
    injectContent.forEach(function(v) {
        console.log(v);
        // const lal = v.join(', ') + '\n';
        // console.log('lala', lal);
        file.write(v + '\n');
    });
    file.end();
    // fs.writeFile(fileToInject, applyNewLines, (err) => {
    //     if(err) {
    //         console.error(err);
    //     }
    // })
}

// fs.readFile(file, "utf-8", (err, data) => {
//   console.log(data);

// });

getAllIconNames((iconNames) => removeImportsAndCompounds(iconNames, (injectContent) => writeInjectIconsToFile(injectContent)));
//removeImportsAndCompounds(iconNames);
