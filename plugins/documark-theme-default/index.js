var fs     = require('fs');
var path   = require('path');
var stylus = require('stylus-renderer');

module.exports = function themeDefault ($, document, cb) {
	var plugins = document.plugins();

	// TODO(mauvm): Move to own package and remove ../
	plugins.push(require('../documark-helpers'));
	plugins.push(require('../documark-cache'));
	plugins.push(require('../documark-wrapper'));
	plugins.push(require('../documark-page-meta'));
	plugins.push(require('../documark-table-of-contents'));
	plugins.push(require('../documark-relative-paths'));
	plugins.push(require('../documark-chapter-numbering'));
	plugins.push(require('../documark-hr-to-page-break'));

	// Add theme stylesheet
	document.config().pdf.userStyleSheet = 'file://' + path.resolve(__dirname, 'style.css');

	stylus(
		[path.join(__dirname, 'style.styl')],
		{
			stylusOptions: {
				compress: ! document.config().debug
			}
		},
		cb // Plugin is done after compiling stylesheet
	);
};
