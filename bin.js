#!/usr/bin/env node
if (process.argv.length < 3) {
  process.stderr.write('Usage: format-json-files <file> (<file>...)\n')
  process.exit(1)
}

var fs = require('fs')

process.argv.slice(2).forEach(function (file) {
  try {
    var json = fs.readFileSync(file)
  } catch (error) {
    process.stderr.write('Could not read ' + file + '\n')
    process.exit(1)
  }

  try {
    var parsed = JSON.parse(json)
  } catch (error) {
    process.stderr.write('Invalid JSON:' + file + '\n')
    process.exit(1)
  }

  fs.writeFileSync(file, JSON.stringify(parsed, null, 2) + '\n')
})
