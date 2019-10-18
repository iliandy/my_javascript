const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  const files = [
    './dist/ng-element/runtime-es2015.js',
    './dist/ng-element/polyfills-es2015.js',
    './dist/ng-element/scripts.js',
    './dist/ng-element/main-es2015.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements.js');
  await fs.copyFile('./dist/ng-element/styles.css', 'elements/styles.css')
  await fs.copy('./dist/ng-element/assets/', 'elements/assets/')
})()
