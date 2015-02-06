var fs       = require('fs');
var path     = require('path');
var absolute = /^(\/|http)/;

module.exports = function relativePaths ($, document, cb) {
	var basePath = document.path();

	$('[src], [href]').each(function () {
		var $this = $(this);
		var attr  = (this.attribs.src !== undefined ? 'src' : 'href');
		var url   = $this.attr(attr);

		if ( ! url.match(absolute)) {
			var filePath = path.resolve(basePath, url);
			if (fs.existsSync(filePath)) {
				$this.attr(attr, filePath);
			}
		}
	});

	cb();
};
