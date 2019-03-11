
var fs = require('fs')
var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var files = fs.readdirSync(resolve('/src/pages/'))

files = files.filter(item => {
  return item.indexOf('.DS_Store') === -1
})

module.exports = files
