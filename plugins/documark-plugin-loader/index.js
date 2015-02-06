var fs   = require('fs');
var path = require('path');

module.exports = function pluginLoader ($, document, cb) {
	var plugins = document.plugins();

	$('import').each(function () {
		var $this  = $(this);
		var plugin = $this.text();

		// Check if ./plugins/<name>.js exists, then use this instead
		var localPlugin = path.join(document.path(), 'plugins', plugin);

		if (fs.existsSync(localPlugin)) {
			plugin = localPlugin;
		}

		plugins.push(plugin);
		$this.remove();
	});

	cb();
};
