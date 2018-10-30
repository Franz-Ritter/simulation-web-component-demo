const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/client-test/runtime.js',
    './dist/client-test/polyfills.js',
    './dist/client-test/scripts.js',
    './dist/client-test/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/simulator-element.js');
  await fs.copyFile(
    './dist/client-test/styles.css',
    'elements/styles.css'
  );
})();