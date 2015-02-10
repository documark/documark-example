var fs   = require('fs');
var path = require('path');

module.exports = function math ($, document, cb) {
	$('head').append(fs.readFileSync(path.join(__dirname, 'math.html'), { encoding: 'UTF-8' }));

	cb();
};
