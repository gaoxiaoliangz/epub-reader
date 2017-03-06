/**
 * args
 * -w, --watch
 * --target=targetName (node, assets)
 */

const webpack = require('webpack')
const chalk = require('chalk') // eslint-disable-line
const minimist = require('minimist')
const moment = require('moment')

// require('./utils/env')

const TARGETS = ['node', 'assets']

const argv = minimist(process.argv.slice(2))
const isWatching = argv.w || argv.watch
// const env = (argv.p || argv.production) ? 'production' : 'development'

if (argv.target === 'assets') {
  process.env.NODE_ENV = 'production'
}

// Print out errors
function printErrors(summary, errors) {
  console.info(chalk.red(summary))
  console.info()
  errors.forEach(err => {
    // new version of loader seems to output the right error info
    // this may be removed in the future
    // const file = _.get(err, ['module', 'context'])
    // console.info(file)

    console.info(err.message || err)
    console.info()
  })
}

function getWebpackConfig(target) {
  let wpConfig
  switch (target) {
    case 'node':
      wpConfig = require('../config/webpack.config.node')
      break

    case 'assets':
      wpConfig = require('../config/webpack.config.assets')
      break

    default:
      wpConfig = null
  }
  return wpConfig
}

function build(target, cb) {
  let compiler
  let startCompilingTime = new Date().valueOf()
  const wpConfig = getWebpackConfig(target)

  const handleCompilerCb = () => (err, stats) => {
    const endTime = new Date().valueOf()
    const totalTime = ((endTime - startCompilingTime) / 1000).toFixed(2)
    const currentTime = moment().format('hh:mm:ss')

    if (err) {
      printErrors(`${currentTime} Failed to compile [err]`, [err])
      if (!isWatching) {
        process.exit(1)
      }
    }

    if (stats.compilation.errors.length) {
      printErrors(`${currentTime} Failed to compile [stats.compilation.errors]`, stats.compilation.errors)
      if (!isWatching) {
        process.exit(1)
      }
    }

    if (process.env.CI && stats.compilation.warnings.length) {
      printErrors(`${currentTime} Failed to compile. When process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically.`, stats.compilation.warnings)
      if (!isWatching) {
        process.exit(1)
      }
    }

    if (!err && !stats.compilation.errors.length && !(process.env.CI && stats.compilation.warnings.length)) {
      console.info(chalk.green(`${currentTime} Compiled ${target} successfully, took ${totalTime}s`))
      if (cb) {
        cb()
      }
    }
  }

  if (isWatching) {
    console.info(`Watching ${target} changes...`)
  } else {
    console.info(`Creating ${target} build...`)
  }

  if (wpConfig) {
    compiler = webpack(wpConfig)
  } else {
    console.info('Target undefined!')
    return false
  }

  if (isWatching) {
    compiler.watch({
      aggregateTimeout: 300,
      poll: false
    }, handleCompilerCb())

    compiler.plugin('invalid', () => {
      startCompilingTime = new Date().valueOf()
      console.info('Compiling...')
    })
  } else {
    compiler.run(handleCompilerCb())
  }

  return true
}

function runTasks(handler, tasks, taskIndex = 0) {
  if (taskIndex <= tasks.length - 1) {
    handler.call(null, tasks[taskIndex], () => {
      runTasks(handler, tasks, taskIndex + 1)
    })
  } else {
    console.info(chalk.green('🎉 Tasks complete!'))
  }
}

function handleBuild() {
  if (argv.target) {
    build(argv.target)
  } else {
    console.info('🚀 Building start...')
    runTasks(build, TARGETS)
  }
}

// todo: untested
// function copyPublicFolder() {
//   fs.copySync(paths.appPublic, paths.appBuild, {
//     dereference: true,
//     filter: file => file !== paths.appHtml
//   });
// }

handleBuild()