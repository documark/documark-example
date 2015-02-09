module.exports = function helpers ($, document, cb) {
	var cache = document.__helpers = {};

	document.helper = function (name, loader) {
		if ( ! cache[name]) {
			if (typeof loader === 'function') {
				cache[name] = loader();
			} else {
				throw new Error('Unknown helper: ' + name);
			}
		}
		return cache[name];
	};
	cb();
};
