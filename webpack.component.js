const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob')
const entries = {}

async function makeList (dirPath, entries) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log('files:', files)
  for (const file of files) {
    const component = file.split(/[/.]/)[2]
    console.log('component: ', component)
    entries[component] = `./${file}`
  }
}

makeList('components/lib', entries)

module.exports = {
  entry: entries,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'qi-ui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}
