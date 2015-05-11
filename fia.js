var fis = module.exports = require('fis');

fis.name = 'fia';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');