module.exports = function pageMeta ($, document, cb) {
	var options   = document.config().pdf;
	var $header   = $('header');
	var hasHeader = ($header.length > 0);
	var $footer   = $('footer');
	var hasFooter = ($footer.length > 0);

	options.encoding     = 'UTF-8';
	options.pageSize     = 'A4';
	options.marginTop    = (hasHeader ? '30mm' : '12mm');
	options.marginBottom = (hasFooter ? '28mm' : '12mm');
	options.marginLeft   = '24mm';
	options.marginRight  = '12mm';

	if (hasHeader) {
		var headerFile = document.tempFileWriteStream('header.html');
		headerFile.end($.html($header));
		options.headerHtml = 'file://' + headerFile.path;
	}
	if (hasFooter) {
		var footerFile = document.tempFileWriteStream('footer.html');
		footerFile.end($.html($footer));
		options.footerHtml = 'file://' + footerFile.path;
	}

	$header.remove();
	$footer.remove();

	cb();
};
