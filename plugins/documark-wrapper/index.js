var path = require('path');
var jade = require('jade');

module.exports = function wrapper ($, document, cb) {
	document.helper('wrapper', function () {
		return function (body) {
			return jade.renderFile(
				path.join(__dirname, 'wrapper.jade'),
				{ body: body }
			);
		};
	});

	cb();
};
