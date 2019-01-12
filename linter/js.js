const CLIEngine                   = require('eslint').CLIEngine
const { getIgnorePath, getFiles } = require('../utils')

async function lint (cfg) {
  const cli = new CLIEngine({
    fix       : cfg.flags.fix,
    extensions: ['.js', '.vue'],
    ignorePath: getIgnorePath('.eslintignore'),
    baseConfig: { extends: ['eslint-config-adenvt'] },
  })

  const files     = getFiles(cfg, ['.'])
  const report    = cli.executeOnFiles(files)
  const formatter = cli.getFormatter('pretty')
  const output    = formatter(report.results)

  CLIEngine.outputFixes(report)

  if (output)
    console.log(output)

  if (report.errorCount > 0)
    throw new Error('lint_error')
}

module.exports = lint
