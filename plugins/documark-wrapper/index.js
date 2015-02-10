var path = require('path');
var jade = require('jade');

module.exports = function wrapper ($, document, cb) {
	var wrapper = document.helper('wrapper', function () {
		return function (body) {
			return jade.renderFile(
				path.join(__dirname, 'wrapper.jade'),
				{ body: body }
			);
		};
	});

	// Wrap root document
	var $container = $(wrapper(''));
	var $children  = $.root().children().remove();
	$.root().append($container.append($children));

	cb();
};
