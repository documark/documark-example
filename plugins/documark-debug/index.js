module.exports = function debug ($, document, cb) {
	if (document.config().debug) {
		document.once('post-compile', function () {
			var file   = document.tempFileWriteStream('document.html');
			var config = document.tempFileWriteStream('config.json');

			file.end($.html());
			config.end(JSON.stringify(document.config(), null, 4));
		});
	}
	cb();
};
