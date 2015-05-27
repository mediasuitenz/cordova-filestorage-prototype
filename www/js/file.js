'use strict';
/*globals FileTransfer*/

var downloadAndSaveFile = function (url, path, cb) {
  var fileTransfer = new FileTransfer();
  var uri = encodeURI(url);

  fileTransfer.download(
    uri,
    path,
    function (file) {
      cb(undefined, file.toURL())
    },
    function (error) {
      cb(error)
    }
  )
}

var loadFile = function (url, path, cb) {
  path = window.cordova.file.dataDirectory + path
  window.resolveLocalFileSystemURL(
    path,
    function (file) {
      // File exists
      console.log('THE FILE EXSTS', file.toURL())
      return cb(undefined, file.toURL())
    },
    function () {
      console.log('DOWNLOADING THE FILE NOW')
      return downloadAndSaveFile(url, path, cb)
    }
  )
}

module.exports = {
  loadFile: loadFile
}
