const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@images': path.resolve(__dirname, './src/assets/img/'),
            '@audio': path.resolve(__dirname, './src/assets/audio'),
            '@styles': path.resolve(__dirname, './src/assets/styles/setup.sass'),
        }
    }
}
