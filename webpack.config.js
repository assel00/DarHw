module.exports = {
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};