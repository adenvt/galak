#! /usr/bin/env node

const js  = require('./linter/js')
const css = require('./linter/css')
const cli = require('./cli')

// js()
async function start (cfg) {
  try {
    await js(cfg)
    await css(cfg)
  } catch (err) {
    if (err.message === 'lint_error')
      return process.exit(1)

    console.error(err)
    process.exit(99)
  }
}

start(cli)
