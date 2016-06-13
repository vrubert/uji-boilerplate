import fs from 'fs'
import path from 'path'
import config from 'config'

const execute = outdir => {
  const javaTemplatesDir = path.join(__dirname, '..', config.get('templates'), 'java')
  const jsTemplatesDir = path.join(__dirname, '..', config.get('templates'), 'js')

  fs.readdir(javaTemplatesDir, (err, files) => {
    if (err) {
      console.log(err.stack)
      process.exit(-1)
    }
    console.log(files)
  })

  fs.readdir(jsTemplatesDir, (err, files) => {
    if (err) {
      console.log(err.stack)
      process.exit(-1)
    }
    console.log(files)
  })
}

export default {
  execute
}
