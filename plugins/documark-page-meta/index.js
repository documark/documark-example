var path     = require('path');
var validUrl = require('valid-url');

module.exports = function pageMeta ($, document, cb) {
	var config    = document.config();
	var options   = config.pdf;
	var cache     = document.helper('cache');
	var wrapper   = document.helper('wrapper');
	var $header   = $('header');
	var hasHeader = ($header.length > 0);
	var $footer   = $('footer');
	var hasFooter = ($footer.length > 0);

	// Page options
	options.encoding     = 'UTF-8';
	options.pageSize     = 'A4';
	options.marginTop    = (hasHeader ? '30mm' : '20mm');
	options.marginBottom = (hasFooter ? '30mm' : '20mm');
	options.marginLeft   = '30mm';
	options.marginRight  = '20mm';

	// Add header/footer
	if (hasHeader) {
		var headerFile = cache.fileWriteStream('header.html');
		headerFile.end(wrapper($.html($header)));
		options.headerHtml = 'file://' + headerFile.path;
		$header.remove();
	}
	if (hasFooter) {
		var footerFile = cache.fileWriteStream('footer.html');
		footerFile.end(wrapper($.html($footer)));
		options.footerHtml = 'file://' + footerFile.path;
		$footer.remove();
	}

	// Globalize stylesheets
	(function () {
		// Concatenate stylesheets
		var stylesheets = (Array.isArray(config.stylesheets) ? config.stylesheets : []);

		if (options.userStyleSheet) {
			stylesheets = [options.userStyleSheet.replace(/^file:\/\//, '')].concat(stylesheets);
		}

		$('link[type="text/css"][href]').each(function () {
			var $this = $(this);
			stylesheets.push($this.attr('href'));
			$this.remove();
		});

		if ( ! stylesheets.length) {
			return callback(null);
		}

		var stylesheetsFile = cache.fileWriteStream('styles.css');
		var imports         = '';

		stylesheets.forEach(function (file) {
			var url = (validUrl.isUri(file) ? file : 'file://' + path.resolve(file));
			imports += '@import url("' + url + '");\n';
		});

		options.userStyleSheet = stylesheetsFile.path;
		stylesheetsFile.end(imports);
	})();

	cb();
};
