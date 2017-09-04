const { injectBabelPlugin } = require('react-app-rewired');
const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
    config.plugins.push(new Dotenv());
    return config;
};