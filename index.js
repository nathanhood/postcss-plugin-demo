const postcss = require('postcss');

module.exports = postcss.plugin('simple-variables', (vars = {}) => {
	const isVariable = /^\$[\w-]+$/;

	return (root, results) => {
		root.walkDecls(decl => {
			if (isVariable.test(decl.value)) {
				decl.value = vars[decl.value.replace('$', '')];
			}
		});
	}
});