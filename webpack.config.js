const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development'; // создаем переменную для development-сборки

module.exports = {
    entry: {
        main: './src/index.js',
        about: './src/about.js',
        analytics: './src/analytics.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js',
    },

    module: {
        rules: [
            {
                // тут описываются правила
                test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                use: { loader: 'babel-loader' }, // весь JS обрабатывается пакетом babel-loader
                exclude: /node_modules/, // исключает папку node_modules
            },

            {
                test: /\.css$/, // применять это правило только к CSS-файлам
                use: [
                    isDev ? 'style-loader' :{
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: '../' 
                        }
                    } ,
                    {
                        loader:'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                ], // если вы собираете в режиме dev, то плагин MiniCssExtractPlugin загружать не нужно.
            },
         
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: ['file-loader?name=./images/[name].[ext]&esModule=false', {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75
                        }
                    }
                },]
            },

            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            }
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true,
        }),
        new HtmlWebpackPlugin({
            inject: false, // стили НЕ нужно прописывать внутри тегов
            chunks: ['main'],
            template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'index.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
        }),
        new HtmlWebpackPlugin({
            chunks: ['about'],
            inject: false, // стили НЕ нужно прописывать внутри тегов
            template: './src/about.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'about.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
        }),
        new HtmlWebpackPlugin({
            inject: false, // стили НЕ нужно прописывать внутри тегов
            chunks: ['analytics'],
            template: './src/analytics.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'analytics.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
        }),
        new WebpackMd5Hash(),

    ],
};
