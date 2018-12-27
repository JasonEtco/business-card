'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const heading = 'Jason Etcovitch / jasonetco'
const github = chalk.gray('https://github.com/') + chalk.blue('jasonetco')
const twitter = chalk.gray('https://twitter.com/') + chalk.cyan('jasonetco')

const output = chalk.white(`
     gg                                                   
    dP8,                                                  
   dP Yb                                                  
  ,8  \`8,
  I8   Yb
  \`8b, \`8,    ,gggg,gg   ,g,      ,ggggg,   ,ggg,,ggg,
   \`"Y88888  dP"  "Y8I  ,8'8,    dP"  "Y8gg,8" "8P" "8,
       "Y8  i8'    ,8I ,8'  Yb  i8'    ,8I I8   8I   8I
        ,88,d8,   ,d8b,8'_   8),d8,   ,d8',dP   8I   Yb
    ,ad8888P"Y8888P"\`YP' "YY8P8P"Y8888P"  8P'   8I   \`Y
  ,dP"'   Yb
 ,8'      I8   ${heading}
,8'       I8   ${github}
I8,      ,8'   ${twitter}
\`Y8,___,d8'
  "Y888P"
`)

const rendered = chalk.green(boxen(output, options))
fs.writeFileSync(path.join(__dirname, 'bin/output'), rendered)
