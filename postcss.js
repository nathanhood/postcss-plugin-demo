const postcss = require('postcss');
const fs = require('fs');
const plugins = [
	require('./index')({
		primary: '#000'
	})
];
const css = fs.readFileSync('./input.pcss');

postcss(plugins)
	.process(css)
	.then(result => {
		fs.writeFileSync('./output.css', result);
	});