# Documark example

This example document shows multiple features of Documark.

## Usage

1. Make sure you have [NodeJS][nodejs] and [WkHTMLToPDF][wkhtmltopdf] installed.
2. Install [Documark][documark]: `npm install documark -g`.
3. Compile this document:

	```bash
	$ git clone https://github.com/mauvm/documark-example
	$ cd documark-example
	$ documark compile
	$ open Document.pdf # Mac OS X only
	```

4. Enjoy!

## To Do

- [x] Default theme
- [x] Cover
- [x] Header/footer
- [x] Table of contents
- [x] MomentJS
- [x] Create `documark-cache` helper
	- Remove temp file functions from Documark core
- [ ] Wrap pages in html, head, body with UTF-8 meta tag
- [ ] Remove header/footer from cover
- [ ] Exclude cover/index and .no-index headers from table of contents
- [ ] Update theme styling according to new elements
- [ ] Find solution for styling/scripts accross multiple pages (and cover?/header/footer)
	- For cover?/header/footer
	- `style` and `script` tag to --user-style-sheet's and global JS?
	- Use `concat` package to merge `config.stylesheets` and `config.scripts` array on pre-compile!
	- Use the following flag to execute a script on every page:
		
		```bash
		--run-script '(function(){var b=document.body,s=document.createElement("script");s.src="test.js";b.insertBefore(s,b.firstChild);})();'
		```

	- Add helper functions collection to Documark (through plugin(s)). For example: `document.addStylesheet('...');`

- [ ] (Inline) code snippets (with highlighting)
- [ ] MathJax support
- [ ] Inline referencing (and references table)
- [ ] Move plugins to seperate NPM packages
- [ ] Scientific theme
- [ ] Landscape pages
- [ ] Set WkHTMLToPDF `--cache-dir` to `./.documark/cache`

[nodejs]: http://nodejs.org/
[wkhtmltopdf]: http://wkhtmltopdf.org/
[documark]: https://github.com/mauvm/documark
