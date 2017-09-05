const { injectBabelPlugin } = require('react-app-rewired');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);

    if(process.env.NODE_ENV === 'production') {
        config.plugins.push(new Dotenv({
            path: path.join(__dirname, '.env.production')
        }));
    } else {
        config.plugins.push(new Dotenv({
            path: path.join(__dirname, '.env')
        }));
    }

    return config;
};