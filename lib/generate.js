import fs from 'fs'
import path from 'path'
import config from 'config'
import handlebars from 'handlebars'
import mkdirp from 'mkdirp'

handlebars.registerHelper('javaPath', function(options) {
  return '{' + options.fn(this) + 'Id}'
})

const templatesMap = config.get('templatesMap')

const getOutFilename = (template, data, baseDir) => {
  var compiledTemplate = handlebars.compile(template)
  return path.join(baseDir, compiledTemplate(data))
}

const generateCode = (templateDir, section, templateFile, outBaseDir, data) => {
  const outFile = getOutFilename(templatesMap[section][templateFile], data, outBaseDir)
  var templateContent = fs.readFileSync(path.join(templateDir, templateFile), 'utf8')
  var compiledTemplate = handlebars.compile(templateContent)
  var result = compiledTemplate(data)

  mkdirp(path.dirname(outFile), err => {
    if (err) {
      throw err
    }

    fs.writeFileSync(outFile, result)
  })
}

const execute = args => {
  const outBaseDir = args.outdir
  const jsonDataFile = args.data

  const javaTemplatesDir = path.join(__dirname, '..', config.get('templatesDir'), 'java')
  const jsTemplatesDir = path.join(__dirname, '..', config.get('templatesDir'), 'js')

  fs.readdir(javaTemplatesDir, (err, templates) => {
    if (err) {
      throw err
    }

    var data = require(path.join(__dirname, '..', jsonDataFile))
    for (const templateFile of templates) {
      for (const modelData of data.models) {
        generateCode(javaTemplatesDir, 'java', templateFile, outBaseDir, Object.assign({}, { applicationName: data.appPrefix }, modelData))
      }
    }
  })

  fs.readdir(jsTemplatesDir, (err, templates) => {
    if (err) {
      throw err
    }

    var data = require(path.join(__dirname, '..', jsonDataFile))
    for (const templateFile of templates) {
      for (const modelData of data.models) {
        generateCode(jsTemplatesDir, 'js', templateFile, outBaseDir, Object.assign({}, { applicationName: data.appPrefix }, modelData))
      }
    }
  })
}

export default {
  execute
}
