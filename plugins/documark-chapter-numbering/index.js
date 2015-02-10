module.exports = function chapterNumbering ($, document, cb) {
	// Automatic page numbering
	var h1 = 0, h2 = 0, h3 = 0;

	function formatIndex() {
		var index = h1 + '.';
		if (h2 > 0) index += h2 + '.';
		if (h3 > 0) index += h3 + '.';
		return index + ' ';
	}

	function createIndex($item) {
		var title = $item.text();

		// Remove existing numbering
		title = title.replace(/^[0-9\.\s]+/, '');

		// Prepend correct number
		var type = $item[0].name.toLowerCase();

		if (type === 'h1' ) {
			h1 += 1;
			h2 = 0;
			h3 = 0;
			title = formatIndex() + title;
		} else if (type === 'h2') {
			h2 += 1;
			h3 = 0;
			title = formatIndex() + title;
		} else if (type === 'h3' ) {
			h3 += 1;
			title = formatIndex() + title;
		}

		return title;
	}

	$('h1, h2, h3').each(function () {
		var $this = $(this);

		// Skip if self/parent has 'no-index' class
		if ($this.hasClass('no-index') || $this.parents('.no-index').length) {
			return;
		}

		$this.text(createIndex($this));
	});

	cb();
};
