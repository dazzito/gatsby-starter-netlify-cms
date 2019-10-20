var proxy = require('http-proxy-middleware');
var path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Lawfirm Template [DZ]',
		description: 'Example law firm website template',
		languages: { langs: ['en', 'th'], defaultLangKey: 'en' },
	},
	plugins: [

		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			}, 
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-plugin-modal-routing`,
			options: {
				// A selector to set react-modal's app root to, default is `#___gatsby`
				// See http://reactcommunity.org/react-modal/accessibility/#app-element
				appElement: '#___gatsby',

				// Object of props that will be passed to the react-modal container
				// See http://reactcommunity.org/react-modal/#usage
				modalProps: {
					style: {
						overlay: {
							position: `fixed`,
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: `rgba(0, 0, 0, 0.75)`,
						},
						content: {
							position: `absolute`,
							border: `none`,
							background: `none`,
							padding: 0,
							top: 0,
							bottom: 0,
							right: 0,
							left: 0,
							overflow: `auto`,
							WebkitOverflowScrolling: `touch`,
							maxWidth: 1260,
							marginLeft: 'auto',
							marginRight: 'auto',
							marginTop: '2rem',
						},
					},
					contentLabel: `Modal`,
				},
			},
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
	
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				shared: path.join(__dirname, 'src/shared'),
				component: path.join(__dirname, 'src/components'),
				scss: path.join(__dirname, 'src/components'),
			},
		},
		{
			resolve: 'gatsby-plugin-i18n',
			options: {
				langKeyForNull: `en`,
				langKeyDefault: `en`,
				useLangKeyLayout: false,
        prefixDefault: false,
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},

		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
			},
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
	// for avoiding CORS while developing Netlify Functions locally
	// read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
	developMiddleware: app => {
		app.use(
			'/.netlify/functions/',
			proxy({
				target: 'http://localhost:9000',
				pathRewrite: {
					'/.netlify/functions/': '',
				},
			})
		);
	},
};
