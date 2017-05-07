#!/usr/bin/env node

const jf = require('jsonfile')
const fs = require('fs')
const fileNameToRead = process.argv[2]
const prefix = process.argv[3] ? process.argv[3].toUpperCase() + '_' : null

let configFile = jf.readFileSync(fileNameToRead)

let replaceWithPath = (obj, prefix) => {
  Object.keys(obj).map(key => {
    let upperCaseKey = key.toUpperCase()
    let name = prefix ? prefix + upperCaseKey : upperCaseKey
    if (typeof obj[key] !== 'object' || Array.isArray(obj[key])) obj[key] = name
    else obj[key] = replaceWithPath(obj[key], name + '_')
  })
  return obj
}

fs.writeFileSync('./custom-environment-variables.json', JSON.stringify(replaceWithPath(configFile, prefix), null, 4))
