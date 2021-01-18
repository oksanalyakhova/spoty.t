const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@images': path.resolve(__dirname, './src/assets/img/'),
            '@styles': path.resolve(__dirname, './src/assets/styles/setup.sass')
        }
    }
}
