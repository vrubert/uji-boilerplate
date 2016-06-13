import program from 'commander'

const getArgs = args => {
  let action

  program
    .version('0.0.1')
    .option('-o, --out-dir [value]', 'Output directory')

  program
    .command('generate')
    .description('Generate the template files with the requested model')
    .action(cmd => {
      action = 'generate'
    })

  program.parse(args)

  return {
    action,
    outdir: program.outDir
  }
}


export default {
  getArgs
}
