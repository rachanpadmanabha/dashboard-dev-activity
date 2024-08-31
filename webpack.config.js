const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { DefinePlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.tsx', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // Content hashing for cache busting
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource', // For handling images and fonts
                generator: {
                    filename: 'assets/[name].[contenthash][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(), // Only in development mode
        // new BundleAnalyzerPlugin(), // Uncomment this to analyze bundle size
    ].filter(Boolean),
    optimization: {
        minimize: !isDevelopment,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single', // Extract runtime code into a separate bundle
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true, // For handling client-side routing
    },
    devtool: isDevelopment ? 'inline-source-map' : 'source-map', // Source maps for development
};
