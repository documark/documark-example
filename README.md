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
- [ ] Remove header/footer from cover
- [ ] Exclude cover/index and .no-index headers from table of contents
- [ ] Update theme styling according to new elements
- [ ] Find solution for styling/scripts accross multiple pages (and cover?/header/footer)
	- For cover?/header/footer
	- `style` and `script` tag to --user-style-sheet's and global JS?
- [ ] (Inline) code snippets (with highlighting)
- [ ] MathJax support
- [ ] Inline referencing (and references table)
- [ ] Move plugins to seperate NPM packages
- [ ] Scientific theme
- [ ] Landscape pages

[nodejs]: http://nodejs.org/
[wkhtmltopdf]: http://wkhtmltopdf.org/
[documark]: https://github.com/mauvm/documark
