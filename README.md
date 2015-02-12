# Documark example

This example document shows multiple features of Documark.

## Usage

1. Make sure you have [NodeJS][nodejs] and [WkHTMLToPDF][wkhtmltopdf] installed
2. Install [Documark][documark]: `npm install documark -g`
3. Run `npm install`
4. Compile this document:

	```bash
	$ git clone https://github.com/mauvm/documark-example
	$ cd documark-example
	$ documark compile
	$ open Document.pdf # Mac OS X only
	```

5. Enjoy!

## Preview

See [Example.pdf][example-pdf] for the final result!

## Getting Started

These are the things you need to know in order to get started:

1. The `document.jade` file is compiled, so define your structure in here. You can configure your document and include Jade/Markdown files in here.
2. Assets are resolved from the directory where your `document.jade` file is in.

	This means that if you have an image in `./assets/img/kitteh.png` and want to add it in `./chapters/intro.md`, you can do this with `![Kitteh!](assets/img/kitteh.png)`.

3. Writing your own plugins is super easy:

	1. Create a file `plugins/documark-my-plugin/index.js`
	2. Add `import my-plugin` to your `document.jade`
	3. Use this template for your `index.js` file:

	```js
	module.exports = function myPlugin ($, document, cb) {
		// Do your thang!
		cb();
	};
	```

Good luck!

## To Do

- [x] Default theme
- [x] Cover
- [x] Header/footer
- [x] Table of contents
- [x] MomentJS
- [x] Create `documark-cache` helper
	- Remove temp file functions from Documark core
- [x] Wrap pages in html, head, body with UTF-8 meta tag
- [x] Remove header/footer from cover
- [x] Exclude cover/index and .no-index headers from table of contents
- [x] Update theme styling according to new elements
- [x] Find solution for styling/scripts accross multiple pages
- [x] Add automatic chapter numbering
- [x] Set WkHTMLToPDF `--cache-dir` to `./.documark/`
- [x] MathJax support
- [ ] Include code from source file
- [ ] Code snippets (inline, with highlighting)
- [ ] Inline referencing (and references table)
- [ ] Move plugins to seperate NPM packages
- [ ] Create scientific (LaTex like) theme
- [ ] Landscape pages (really hard to do :( )

[nodejs]: http://nodejs.org/
[wkhtmltopdf]: http://wkhtmltopdf.org/
[documark]: https://github.com/mauvm/documark
[example-pdf]: https://github.com/mauvm/documark-example/raw/master/Example.pdf
