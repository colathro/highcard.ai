module.exports = {
    context: __dirname + "/src",
    entry: [
        './index.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js'
    }
};
