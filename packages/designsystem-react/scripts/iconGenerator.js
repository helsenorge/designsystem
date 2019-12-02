const fs = require('fs-extra');
const yargs = require('yargs');
const async = require('async');
const svgr = require('@svgr/core').default;
const hastToBabelAst = require('@svgr/hast-util-to-babel-ast').default;
const {parse} = require('svg-parser');
const path = require('path');

const COMMENT_TEMPLATE_START = '/* [START] This is auto-generated by iconGenerator.js */';
const COMMENT_TEMPLATE_END = '/* [END] This is auto-generated by iconGenerator.js */';

yargs
  .scriptName('hnds-svg2react')
  .usage('$0 <cmd> [args]')
  .command(
    'generate <src> <dest>',
    'Generates React components from SVG files.',
    yargs => {
      yargs.positional('src', {
        type: 'path',
        describe: 'the source path where the svg files reside.',
      });
      yargs.positional('dest', {
        type: 'path',
        describe: 'the destionation path where to put the react components.',
      });
    },
    function(argv) {
      loadAllIcons(argv.src);
    },
  )
  .help().argv;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getComponentNameFromFileName(filename) {
  return new Promise(resolve => {
    let componentName = '';
    const splitOnDash = filename.split('-');
    async.forEach(splitOnDash, (namePartial, callback) => {
      if (!namePartial.includes('.svg')) {
        componentName += capitalizeFirstLetter(namePartial);
      }
      callback();
    });
    resolve(componentName);
  });
}

async function loadAllIcons(srcPath) {
  const components = [];
  await new Promise(resolve => {
    fs.readdirSync(path.resolve(__dirname, srcPath)).forEach(async filename => {
      const filePathNormal = path.resolve(__dirname, srcPath + filename);
      const filePathHover = path.resolve(__dirname, srcPath + '../hover/' + filename.replace('normal', 'hover'));
      const contentsNormal = fs.readFileSync(filePathNormal, {encoding: 'utf8'}).toString();
      const contentsHover = fs.readFileSync(filePathHover, {encoding: 'utf8'}).toString();

      const componentName = await getComponentNameFromFileName(filename);
      const svgElementNormal = await parseToJsx(contentsNormal);
      const svgElementHover = await parseToJsx(contentsHover);

      applyFillColor(svgElementNormal.children);
      applyFillColor(svgElementHover.children);

      components.push(componentName);

      // In order to save some time trying to rewire this thing we just send the svg contents of normal. It won't be used anyway
      svgr(
        contentsNormal,
        {
          template: template,
          svgProps: {width: '{size}', height: '{size}', ref: '{ref}', className: 'icon'},
        },
        {componentName: componentName, svgNormal: svgElementNormal, svgHover: svgElementHover},
      ).then(code => {
        writeIconToFile(code, componentName);
      });

      resolve();
    });
  });
  injectIntoIconFile(components);
}

function writeIconToFile(contents, componentName) {
  fs.writeFileSync(path.resolve(__dirname, `../src/components/Icons/${componentName}.tsx`), contents);
}

async function parseToJsx(code) {
  const parsedSvg = await new Promise(resolve => resolve(parse(code)));
  const babelTree = await new Promise(resolve => resolve(hastToBabelAst(parsedSvg)));
  return babelTree.body[0].expression;
}

function applyFillColor(children) {
  if (!children) return;
  children.forEach(child => {
    applyFillColor(child.children);
    const type = child.openingElement.name.name;
    const attrs = child.openingElement.attributes;
    if (isValidSvgElement(type)) {
      attrs.forEach((attr, index) => {
        if (attr.name.name === 'fill') {
          attrs.splice(index, 1);
          return;
        }
      });
      attrs.unshift(getFillAttribute());
    }
  });
}

function isValidSvgElement(type) {
  return type.match(/path|polygon/g);
}

function getFillAttribute() {
  return {
    type: 'JSXAttribute',
    name: {type: 'JSXIdentifier', name: 'fill'},
    value: {
      type: 'JSXExpressionContainer',
      expression: {
        type: 'JSXText',
        value: 'color',
        raw: 'color',
      },
    },
  };
}

function template({template}, opts, {imports, componentName, props, jsx, exports}) {
  const typeScriptTpl = template.smart({plugins: ['typescript']});
  return typeScriptTpl.ast`
      import React from 'react';
      import {IconProps} from './Icon';


      const ${componentName} = React.forwardRef((svgProps: IconProps, ref: any) => {
        const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
        return !isHovered ? (${opts.state.svgNormal}) : (${opts.state.svgHover})
      });

      export default ${componentName};
    `;
}

function injectIntoIconFile(components) {
  const iconFilePath = path.resolve(__dirname, '../src/components/Icons/Icon.tsx');
  fs.readFile(iconFilePath, {encoding: 'utf8'}, async (err, contents) => {
    const lines = contents.split('\n');
    const startIndex = lines.findIndex(line => line === COMMENT_TEMPLATE_START);
    const endIndex = lines.findIndex(line => line === COMMENT_TEMPLATE_END);
    const injectionBlock = await getInjectionContents(components);
    lines.splice(startIndex, endIndex - 1, ...injectionBlock);
    const file = fs.createWriteStream(iconFilePath);
    file.on('error', function(err) {
      /* error handling */
    });
    lines.forEach(function(v) {
      file.write(v + '\n');
    });
    file.end();
  });
}

function getInjectionContents(components) {
  return new Promise(resolve => {
    let injection = [COMMENT_TEMPLATE_START];
    const importBlock = [];
    const objectMapBlock = ['const iconMapping = {'];

    components.forEach(component => {
      importBlock.push(`import ${component} from './${component}';`);
      objectMapBlock.push(`  ${component.charAt(0).toLowerCase() + component.substring(1)}: ${component},`);
    });
    importBlock.push('');
    objectMapBlock.push('};');
    injection = injection.concat(importBlock);
    injection = injection.concat(objectMapBlock);
    injection.push(COMMENT_TEMPLATE_END);
    return resolve(injection);
  });
}
