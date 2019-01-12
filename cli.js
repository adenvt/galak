const meow = require('meow')
const cli  = meow(`
  Usage
    $ galak <files>

  Options
    --fix,   -f   Autofix code

  Examples
    $ galak
    $ galak resource/js *.js
`, {
  flags: {
    fix: {
      type : 'boolean',
      alias: 'f',
    },
  },
})

module.exports = cli
