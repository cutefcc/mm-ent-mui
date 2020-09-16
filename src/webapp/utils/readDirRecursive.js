const fs = require('fs')
const path = require('path')

function readDirFiles(dirName, files = []) {
  if (!fs.existsSync(dirName)) throw new Error('目录不存在')
  fs.readdirSync(dirName).map(value => {
    const fullPath = path.join(dirName, value)
    const stats = fs.statSync(fullPath)
    const obj = {
      fileName: value,
      path: fullPath,
    }
    if (stats.isFile()) {
      obj.type = 'file'
      files.push(obj)
    }
    if (stats.isDirectory()) {
      obj.type = 'Dir'
      // files.push(obj)
      readDirFiles(fullPath, files)
    }
    return value
  })
}

function readDirRecursive(dirName) {
  const files = []
  readDirFiles(dirName, files)
  return files
}

module.exports = {
  readDirRecursive,
}
