var path        = require('path');
var jade        = require('jade');
var wrapperFile = path.join(__dirname, 'wrapper.jade');

module.exports = function wrapper ($, document, cb) {
	var wrapper = document.helper('wrapper', function () {
		return function (data) {
			if (typeof data !== 'object') {
				data = { body: data };
			}
			return jade.renderFile(data.wrapperFile || wrapperFile, data);
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
