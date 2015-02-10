module.exports = function hrToPageBreak ($, document, cb) {
	$('hr').filter(function () {
		return ! Object.keys(this.attribs).length;
	}).replaceWith('<div style="page-break-before:always"></div>');

	cb();
};
