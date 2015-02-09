# Documark Cache

Requires the [`documark-helpers`](https://github.com/mauvm/documark-helpers) plugin.

### Usage

1. Add plugin to document configuration (at the top):

	```yaml
	plugins:
	  - documark-cache
	```

2. Use the cache helper in your plugins:

	```js
	module.exports = function pluginNameHere ($, document, cb) {
		var file = document.helper('cache').fileWriteStream('my-cache-file.json');

		file.end(JSON.stringify({ hello: 'world!' });
		cb();
	};
	```
