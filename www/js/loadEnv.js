'use strict';
module.exports = function () {
  var fs = require('fs')
  var envReader = require('env-reader')()
  var envParser = require('env-parser')()
  var envWriter = require('env-writer')()
  envReader.pipe(envParser).pipe(envWriter)
  envReader.write(fs.readFileSync('.env'))
}
