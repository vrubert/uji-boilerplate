import argparse from './lib/argparse'
import generate from './lib/generate'

const args = argparse.getArgs(process.argv)

if (args.action === 'generate') {
  generate.execute(args.outdir)
}
