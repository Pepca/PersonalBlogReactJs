// Global variables
const path = require('path')

// Plugin for hot reloading page in react components
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// Production plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// Optimization plugins
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

// Eslint
const EslintWebpackPlugin = require('eslint-webpack-plugin')

// Variables for control the bundle
const _devMode = 'development'
const _prodMode = 'production'

const isDev = process.env.NODE_ENV === _devMode

const mode = isDev ? _devMode : _prodMode
const target = isDev ? 'web' : 'browserslist'

// Functions for control the bundle:
// =======================================
// Plugins
const plugins = () => {
  const config = [
    isDev ? new ReactRefreshWebpackPlugin() : new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/style/skelet/skelet-styles.css', to: 'skelet-HTML' }
      ]
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      scriptLoading: isDev ? 'blocking' : 'defer',
      inject: false,
      minify: {
        collapseWhitespace: !isDev
      }
    }),

    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      prefix: 'favicon/'
    }),

    new EslintWebpackPlugin()
  ]

  if (!isDev) {
    config.unshift(new CleanWebpackPlugin())
    config.push(
      new MiniCssExtractPlugin({
        filename: 'style/[contenthash].bundle.css',
        chunkFilename: 'style/[contenthash].chunk.css'
      })
    )
  }

  return config
}
// =======================================

// =======================================
// Optimization
const optimization = () => {
  const config = {
    minimize: !isDev,
    splitChunks: {
      chunks: 'all'
    }
  }

  if (!isDev)
    config.minimizer = [
      new TerserWebpackPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false,
        minify: (file) => {
          const uglifyJsOptions = {}
          return require('uglify-js').minify(file, uglifyJsOptions)
        }
      }),
      new CssMinimizerWebpackPlugin({
        minimizerOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        },
        minify: CssMinimizerWebpackPlugin.cleanCssMinify
      })
    ]

  return config
}
// =======================================

// Bundle
module.exports = {
  mode: mode,
  target: target,

  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: isDev
  },

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[contenthash].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: './images'
            }
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     jpegtran: {
          //       progressive: true
          //     },
          //     optipng: {
          //       optimizationLevel: 3
          //     },
          //     gifsicle: {
          //       interlaced: false
          //     },
          //     webp: {
          //       quality: 80
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts'
            }
          }
        ]
      },
      {
        test: /\.(mp3?4|mp4v|wmv|avi|mov|webm|mvk)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: './videos'
            }
          }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          isDev ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/'
              }
            }
          },
          { loader: 'css-loader', options: { sourceMap: isDev } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev,
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    { autoprefixer: { grid: 'autoplace' } }
                  ]
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: isDev }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  optimization: optimization(),

  plugins: plugins(),

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: isDev ? 'source-map' : false
}
