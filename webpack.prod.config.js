var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: {
    javascript: "./app/index.js",
  },

  output:{
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
    publicPath: '/public/'
  },

  resolve: {
    modulesDirectories: ['node_modules', 'app', 'js']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015',  'stage-2']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract('css?modules&camelCase=dashes&localIdentName=[local]---[hash:base64:6]!postcss')
      },
      {
        test: /\.(svg|ttf|woff|woff2|otf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: function(webpack) {
    return [
      require('postcss-import')({
        path: ["app"]
      }),
      require('postcss-cssnext')({
        features: {
          customProperties: { preserve: 'computed' }
        },
        plugins: {
          afterEach: [
            require('postcss-at-rules-variables')
          ],
          beforeEach: [
            require('postcss-custom-properties')
          ]
        }
      }),
      require('postcss-nested'),
      require('postcss-each')({
        plugins: {
          afterEach: [
            require('postcss-at-rules-variables')
          ],
          beforeEach: [
            require('postcss-custom-properties')
          ]
        }
      }),
      require('postcss-for')({
        plugins: {
          afterEach: [
            require('postcss-at-rules-variables')
          ],
          beforeEach: [
            require('postcss-custom-properties')
          ]
        }
      }),
      require('postcss-simple-vars'),
      require('postcss-reporter')({ clearMessages: true }),
      require('postcss-hexrgba')
    ];
  },
  plugins: [
    new ExtractTextPlugin('./public/styles.css', {
      allChunks: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
