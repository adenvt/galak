const fs   = require('fs')
const path = require('path')

function cwd (...args) {
  return path.resolve(process.cwd(), ...args)
}

function isLocalExist (file) {
  return fs.existsSync(cwd(file))
}

function getIgnorePath (file) {
  if (isLocalExist(file))
    return cwd(file)

  if (isLocalExist('.gitignore'))
    return cwd('.gitignore')

  return path.resolve(__dirname, '../.eslintignore')
}

function getFiles (config, defaults = ['.']) {
  return config.input.length > 0
    ? config.input.map((i) => path.resolve(process.cwd(), i))
    : defaults
}

module.exports = {
  cwd,
  isLocalExist,
  getIgnorePath,
  getFiles,
}
