/*
  Scriptet oppretter en .npmrc fil under /lib_npm for publisering mot npmjs
*/

const fs = require('fs');

var dir = './lib_npm';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.appendFile(`${dir}/.npmrc`, 'registry=https://registry.npmjs.org\r\nalways-auth=true', function (err) {
  if (err) {
    return console.log(`Det oppstod en feil va vi prøvde å opprette en .npmrc fil i ${dir} mappe`, err);
  }
  console.log(`Ny .npmrc fil opprettet i ${dir} mappe`);
});
