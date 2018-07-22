module.exports = {
    entry: "./main.ts",
    devtool: 'inline-source-map',
    output: {
        filename: "app.js"
    },
    module: {
        rules: [{
            test: /.ts$/,
            loader: "ts-loader"
        }]
    }
}