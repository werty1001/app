
'use strict';


// Export

module.exports = {

	app: {
		name: 'Site',
		description: 'Description',
		domain: 'google.com',
	},

	use: {
		templates: '.pug',
		scripts: '.js',
		styles: '.styl',
	},

	build: {
		imagemin: [ 'png', 'jpg' ],
		sourcemaps: [ 'js', 'css' ],
		autoprefixer: [ 'last 3 versions', 'ie 10', 'ie 11' ],
		pugMap: 'app/blocks/map.pug',
		globalStyles: [ 'app/blocks/develop/app/base/variables.styl', 'app/blocks/develop/app/base/mixins.styl' ],
	},

	autoCreate: {
		onlyOnWatch: true,
		files: [ '.styl' ],
		levels: [ 'develop' ],
		ignoreNodes: [ 'symbol', 'grid', 'fa', /fa-/i, /grid__/i, /_active/i, /_no_js/i ],
	},

	addContent: {
		page: `extends ../blocks/layout\n\nblock data\n\t-\n\t\tconst page = {\n\n\t\t\tpath: '[name]',\n\t\t\ttitle: '',\n\t\t\tdescription: '',\n\t\t\tattrs: []\n\n\t\t};\n\nblock content\n\n\n\t// GAP:Header \n\t+header\n\n`,
		styl: '//.[name]',
		pug: `mixin [name]()\n\n\t.[name]&attributes(attributes)\n\n\t\tblock\n`,
	},

	HTMLBeautify: {
		indent_with_tabs: true,
		inline: [],
	},

}

