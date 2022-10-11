/*
  Scriptet oppretter en .npmrc fil under /lib for publisering mot npmjs
*/

import { existsSync, mkdirSync, writeFile } from 'fs';

const dir = './lib';

if (!existsSync(dir)) {
  mkdirSync(dir);
}

writeFile(`${dir}/.npmrc`, 'registry=https://registry.npmjs.org\r\nalways-auth=true', function (err) {
  if (err) {
    return console.log(`Det oppstod en feil va vi prøvde å opprette en .npmrc fil i ${dir} mappe`, err);
  }
  console.log(`Ny .npmrc fil opprettet i ${dir} mappe`);
});
