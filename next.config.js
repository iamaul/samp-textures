module.exports = {
    future: {
        webpack5: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp3)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/sounds/',
                    outputPath: 'static/sounds/',
                    name: '[name].[ext]',
                    esModule: false
                }
            }
        });
        return config
    }
}