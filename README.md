# Documark example

> This example document shows multiple features of Documark.

## Usage

1. Make sure you have [NodeJS][nodejs] and [wkhtmltopdf][wkhtmltopdf] installed.
2. Install [Documark][documark]: `npm install -g documark-cli`.
3. Compile this document. In your command-line, run:

	```bash
	git clone https://github.com/documark/documark-example
	cd documark-example
	npm install
	documark compile
	```

4. Finally, open `Document.pdf` for the result:

	```bash
	open Document.pdf # in Mac OS X
	```

## Preview

See [Example.pdf][example-pdf] for the final result!

## Getting Started

These are the things you need to know in order to get started:

1. The `document.jade` file is compile. In here you can define your structure, add your configuration, and include Jade/Markdown files.
2. Assets are resolved from the directory where your `document.jade` file is in.

	This means that if you have an image in `./assets/img/kitteh.png` and want to add it in `./chapters/intro.md`, you can do this with `![KittyCat](assets/img/kitteh.png)` (instead of `../assets/img/kitteh.png`).

	Also see the [`dmp-relative-paths` plugin][dmp-relative-paths].

3. Writing your own plugins is super easy:

	- Create a file `plugins/my-plugin/index.js`.
	- Add `plugin my-plugin` to your `document.jade`.
	- Use [the plugin template][plugin-template] for your `index.js` file.

Information about the build/compilation process can be [found here][build-process].

Please use the [Github issues][documark-example-issues] to ask questions or get help.  
Good luck and feedback is appreciated!

## Plugins

Documark plugin packages start with `dmp-` and [can be found on NPM][documark-plugins].

[nodejs]: http://nodejs.org/
[wkhtmltopdf]: http://wkhtmltopdf.org/
[documark]: https://www.npmjs.com/package/documark
[example-pdf]: https://github.com/documark/documark-example/blob/master/Example.pdf
[dmp-relative-paths]: https://www.npmjs.com/package/dmp-relative-paths
[plugin-template]: https://github.com/documark/documark#plugin-development
[build-process]: https://github.com/documark/documark#build-process
[dmp-references]: https://www.npmjs.com/package/dmp-references
[documark-example-issues]: https://github.com/documark/documark-example/issues
[documark-plugins]: https://www.npmjs.com/browse/keyword/documark-plugin
