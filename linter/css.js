const path                        = require('path')
const stylelint                   = require('stylelint')
const formatter                   = require('stylelint-formatter-pretty')
const { getIgnorePath, getFiles } = require('../utils')

async function lint (cfg) {
  const files  = getFiles(cfg, ['**/**.css', '**/*.scss'])
  const report = await stylelint.lint({
    configFile: path.resolve(__dirname, '../.stylelintrc.js'),
    fix       : cfg.flags.fix,
    files     : files,
    formatter : formatter,
    ignorePath: getIgnorePath('.stylelintignore'),
  })

  if (report.output)
    console.log(report.output)

  if (report.errored)
    throw new Error('lint_error')
}

module.exports = lint
