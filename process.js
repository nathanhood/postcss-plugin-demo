const postcss = require('postcss');
const fs = require('fs');
const myPlugin = require('./index');
const plugins = [
	myPlugin({
		primary: '#000'
	})
];
const css = fs.readFileSync('./input.pcss');

postcss(plugins).process(css)
	.then(result => {
		fs.writeFileSync('./output.css', result);
	})
	.catch(err => {
		console.log(err);
	});