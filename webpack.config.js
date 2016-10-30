var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./index.js",
    html: "./index.html",
    css: "./index.style"
  },

  output:{
    filename: "index.js",
    path: __dirname
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
      require('postcss-reporter')({ clearMessages: true })
    ];
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ]
}
