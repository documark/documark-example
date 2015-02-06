# Documark Table of Contents

### Usage

1. Add plugin to document configuration:

	```
	plugins:
	  - documark-table-of-contents
	```

2. Add TOC in `document.jade`:

	```jade
	tableofcontents
		//- .no-index when using documark-chapter-numbering
		h1.no-index Index
		ul
			- each page in index
				//- Skip headers that do not start with a number
				if page.title.match(/^\d/)
					li.first
						span.page-title= page.title
						span.page-number= page.page
						if page.subpages
							ul
								- each subpage in page.subpages
									li.second
										span.page-title= subpage.title
										span.page-number= subpage.page
	```

### To Do

Add support for:

- Default templates, so step two will become:

	```jade
	tableofcontents
		h1 Index
	```

	And the rest will be appended automatically.

- Skipping chapters (now only possible in combination with the documark-chapter-numbering plugin)
- More than two levels deep
