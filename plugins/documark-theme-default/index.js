var fs     = require('fs');
var path   = require('path');
var stylus = require('stylus-renderer');

module.exports = function themeDefault ($, document, cb) {
	var plugins = document.plugins();

	// TODO(mauvm): Move to own package and remove ../
	plugins.unshift(
		require('../documark-helpers'),
		require('../documark-cache'),
		require('../documark-wrapper'),
		require('../documark-page-meta'),
		require('../documark-table-of-contents'),
		require('../documark-relative-paths'),
		require('../documark-chapter-numbering'),
		require('../documark-hr-to-page-break')
	);

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
