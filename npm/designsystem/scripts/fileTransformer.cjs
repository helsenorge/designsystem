const { basename } = require('path');

module.exports = {
  process(filename) {
    return 'module.exports = ' + JSON.stringify(basename(filename)) + ';';
  },
};
