(function () {
	var occurences = {};
	function getOccurenceCount (text) {
		return (occurences[text] = (occurences[text] || 0) + 1);
	}
	$('tableofcontents ul.index-1 li[title]').each(function () {
		var $item      = $(this);
		var headerType = 'h' + $item.data('index');
		var text       = $item.attr('title');
		var $header    = $(headerType).filter(function () {
			return $(this).text() === text;
		}).eq(getOccurenceCount(text) - 1);

		if ( ! $header.length || $header.hasClass('no-index') || $header.parents('.no-index').length) {
			$item.remove();
		}
	});
})();
