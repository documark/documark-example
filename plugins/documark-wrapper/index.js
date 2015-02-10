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
	if ($('body').length === 0) {
		var $wrapper = $(wrapper(''));
		var $items   = $.root().children();
		$wrapper.find('body').append($items);
		$.root().append($wrapper);
	}

	cb();
};
