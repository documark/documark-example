# Documark example

This example document shows multiple features of Documark.

## Usage

1. Make sure you have [NodeJS][nodejs] and [WkHTMLToPDF][wkhtmltopdf] installed
2. Install [Documark][documark]: `npm install -g documark-cli`
3. Compile this document. In your command-line, run:

	```bash
	git clone https://github.com/mauvm/documark-example
	cd documark-example
	npm install
	documark compile
	```

4. Finally, open `Document.pdf` for the result!

	```bash
	open Document.pdf # in Mac OS X
	```

## Preview

See [Example.pdf][example-pdf] for the final result!

## Getting Started

These are the things you need to know in order to get started:

1. The `document.jade` file is compiled, so define your structure in here. You can configure your document and include Jade/Markdown files in here.
2. Assets are resolved from the directory where your `document.jade` file is in.

	This means that if you have an image in `./assets/img/kitteh.png` and want to add it in `./chapters/intro.md`, you can do this with `![KittyCat](assets/img/kitteh.png)`.

3. Writing your own plugins is super easy:

	1. Create a file `plugins/my-plugin/index.js`
	2. Add `import my-plugin` to your `document.jade`
	3. Use this template for your `index.js` file:

		```js
		module.exports = function myPlugin ($, document, done) {
			// Do your thang!
			done();
		};
		```

		The plugin variables you can use are:

		- `$`: the [CheerioJS][cheeriojs] DOM tree (works a lot like jQuery) of the entire document.
		- `document`: the [Documark][documark] instance. Use `document.config()` to get/set configuration variables.
		- `done`: the callback function. Don't forget to call this at the end!

Information about the build/compilation process can be [found here][build-process].

Please use the [Github issues][documark-example-issues] to ask questions or get help.  
Good luck and feedback is appreciated!

## Plugins

Documark plugin packages start with `documark-` or `dmp-` (prefered prefix). Either way, all published plugins [can be found on NPM][documark-plugins].

## Roadmap

- [x] [Inline referencing (and references table)][dmp-references]
- [ ] Code snippets (inline, with highlighting)
- [ ] Include code from source file
- [ ] Create scientific ([LaTex like][latex-theme]) theme
- [ ] Landscape pages (really hard to do ◔̯◔)

[nodejs]: http://nodejs.org/
[wkhtmltopdf]: http://wkhtmltopdf.org/
[documark]: https://github.com/mauvm/documark
[example-pdf]: https://github.com/mauvm/documark-example/raw/master/Example.pdf
[cheeriojs]: https://github.com/cheeriojs/cheerio
[build-process]: https://github.com/mauvm/documark#build-process
[dmp-references]: https://github.com/MalcolmK/dmp-references
[documark-example-issues]: https://github.com/mauvm/documark-example/issues
[documark-plugins]: https://www.npmjs.com/browse/keyword/documark-plugin
[latex-theme]: https://www.sharelatex.com/templates/thesis/norwegian-university-of-science-and-technology
