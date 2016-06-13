import argparse from './lib/argparse'
import fs from 'fs'
import handlebars from 'handlebars'

const args = argparse.getArgs(process.argv)
console.log(args)

var source = fs.readFileSync('./templates/java/dao.handlebars', 'utf8');
var template = handlebars.compile(source)
var data = { "modelName": "Hospital", "instanceName": "hospital", "applicationName": "pho"};
var result = template(data);
console.log(result);