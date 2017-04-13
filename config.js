

'use strict';


// Export

module.exports = {

	app: {
		lang: 'ru',
		name: 'Site',
		description: 'Description',
		domain: 'google.com',
		preloader: false,
		responsive: true,
		microdata: false,
		jquery: false
	},

	options: {
		requireLibs: false,
		cssBundles: false,
		jsBundles: false,
		sourcemap: false,
		babel: false
	},

	levels: {
		common: 1,
		develop: 2
	},

	mainLevel: 'develop',

	extnames: {
		templates: '.pug',
		scripts: '.js',
		styles: '.styl'
	},

	dist: {
		styles: 'styles',
		fonts: 'styles/fonts',
		img: 'styles/img',
		scripts: 'scripts',
		static: 'static',
		favicons: 'favicons'
	},

	head: {
		favicons: true,
		androidIcons: false,
		appleTouchIcons: false,
		msapplication: false,
		safariPinned: false,
		manifest: false
	},

	manifest: {
		appName: 'Name',
		appDescription: 'Description',
		background: '#020307',
		display: 'standalone',
		orientation: 'portrait',
		start_url: '/?homescreen=1'
	},

	ftp: {
		port: 21,
		host: false,
		user: false,
		pass: false,
		dest: false
	},

	blocks: {
		app: {}
	},

	use: {
		assets: [],
		symbol: [],
		styles: [],
		scripts: []
	},

	add: {
		page: `extends ../blocks/layout\n\nblock data\n\n\t- const page = { path: '[name]', title: '', description: '', styles: [], scripts: [] };\n\nblock content\n\n\n\t= nnn\n\t// Header \n\n\t+header\n\n\n\t= nnn\n\t// Content \n\n\t+content\n\n\n\t= nnn\n\t// Footer \n\n\t+footer\n\n`,
		style: `[comment]\n//.[name]`,
		template: `mixin [name]( bem )\n\n\t+b( '[name]', bem )&attributes(attributes)\n\n\t\tblock\n`,
		block: 'style:img:assets'
	},

	autoCreate: true,
	autoCreateAdd: [ 'style' ],
	autoCreateIgnore: [ 'symbol', 'grid', 'text', /section--no-padding/i, 'html', /fa-/i, /grid__/i, /nav__/i ],
	autoCreateCheckLevels: [ 'common' ],

	assetsAttr: [ 'href', 'src', 'srcset' ]

};

