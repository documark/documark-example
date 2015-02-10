var fs     = require('fs');
var path   = require('path');
var xml2js = require('xml2js');
var jade   = require('jade');
var parser = new xml2js.Parser();

function toc2index(file) {
    var chapters = [];

    if (fs.existsSync(file)) {
        var data = fs.readFileSync(file, 'ascii');

        function findItemsRecursively(holder, node) {
            if ( ! node.item) return;
            node.item.forEach(function (item) {
                if (item['$'].title) {
                    var chapter = {
                        title: item['$'].title,
                        page: parseInt(item['$'].page, 10),
                        subChapters: []
                    };
                    holder.push(chapter);
                    findItemsRecursively(chapter.subChapters, item);
                    if ( ! chapter.subChapters.length) {
                        delete chapter.subChapters;
                    }
                } else {
                    findItemsRecursively(holder, item);
                }
            });
        }

        parser.parseString(data, function (err, result) {
            if (err) return;
            findItemsRecursively(chapters, result.outline);
        });
    }

    return chapters;
}

module.exports = function tableOfContents ($, document, cb) {
	var options = document.config().pdf;
	var $toc    = $('tableofcontents');
	var hasTOC  = ($toc.length > 0);

	if (hasTOC) {
		var tocFilePath = document.helper('cache').filePath('toc.xml');

		// TODO(mauvm): Compare index to current DOM and skip headers from cover/index or with .no-index
		var html = jade.renderFile(path.join(__dirname, 'toc.jade'), {
			chapters: toc2index(tocFilePath),
			depth: 3
		});

		$toc.append(html);
		options.dumpOutline = /*'file://' +*/ tocFilePath;
		$.root().append('<script src="file://' + path.join(__dirname, 'remove-invalid-chapters.js') + '"/>');
	}

	cb();
};
