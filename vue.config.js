module.exports = {
    chainWebpack: chainableConfig => {
    // modify config with webpack-chain
    // https://github.com/mozilla-neutrino/webpack-chain
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    vue: {
        loaders: {
            scss: 'style!css!sass'
        }
    }
},

    configureWebpack: config => {
    // mutate config directly, or return new config
},

// object literal will be merged into base config using webpack-merge
configureWebpack: {
    // ...
}
}