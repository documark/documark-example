var fs       = require('fs');
var path     = require('path');
var sanitize = require('sanitize-filename');

module.exports = function cache ($, document, cb) {
	document.helper('cache', function () {
		return {
			folderPath: function (create) {
				var tempFolder = path.join(document.path(), '.documark');

				if (create && ! fs.existsSync(tempFolder)) {
					fs.mkdirSync(tempFolder, 0755);
				}

				return tempFolder;
			},

			filePath: function (file) {
				return path.join(this.folderPath(true), sanitize(file));
			},

			fileReadStream: function (file) {
				return fs.createReadStream(this.filePath(file));
			},

			fileWriteStream: function (file) {
				return fs.createWriteStream(this.filePath(file));
			},
		};
	});
	cb();
};
