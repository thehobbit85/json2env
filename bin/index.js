#!/usr/bin/env node

const jf = require('jsonfile')
const fs = require('fs')
const fileNameToRead = process.argv[2]
const prefix = process.argv[3] ? process.argv[3].toUpperCase() + '_' : ''
const path = require('path')
const replaceWithPath = require(path.join(__dirname, '../index.js'))

let configFile = jf.readFileSync(fileNameToRead)
fs.writeFileSync('./custom-environment-variables.json', JSON.stringify(replaceWithPath(configFile, prefix), null, 2))
