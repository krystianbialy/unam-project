const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].js'
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'font'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/offer.html',
      filename: 'offer.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/press.html',
      filename: 'press.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tool-shop.html',
      filename: 'tool-shop.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/laser.html',
      filename: 'laser.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gallery.html',
      filename: 'gallery.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/funding.html',
      filename: 'funding.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html'
    }),
    // English version
    new HtmlWebpackPlugin({
      template: './src/en/index.html',
      filename: 'en/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/en/offer.html',
      filename: 'en/offer.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/en/press.html',
      filename: 'en/press.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/en/tool-shop.html',
      filename: 'en/tool-shop.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/en/laser.html',
      filename: 'en/laser.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/en/gallery.html',
      filename: 'en/gallery.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/en/funding.html',
      filename: 'en/funding.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/en/contact.html',
      filename: 'en/contact.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new FileManagerPlugin({
      onEnd: {
        copy: [
          { source: './dist/img', destination: './dist/en/img' },
          { source: './src/php', destination: './dist' },
          { source: './src/php', destination: './dist/en' }
        ]
      }
    })
  ]
};
