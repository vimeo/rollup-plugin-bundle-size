const chalk = require('chalk');
const maxmin = require('maxmin');

module.exports = function() {
    return {
        name: 'rollup-plugin-bundle-size',
        generateBundle(options, bundle) {
            const files = Object.values(bundle).filter((file) => file.isEntry || file.isAsset);
            files.forEach((file) => {
                const code = file.code || file.source;
                const size = maxmin(code, code, true);
                console.log(`Created ${chalk.cyan(file.fileName)}: ${size.substr(size.indexOf(' → ') + 3)}`);
            });
        }
    };
};
