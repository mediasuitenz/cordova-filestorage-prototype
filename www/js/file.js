'use strict';
/*globals FileTransfer*/

var downloadFile = function (url, path, cb) {
  path = window.cordova.file.dataDirectory + path
  var fileTransfer = new FileTransfer();
  var uri = encodeURI(url);

  console.log('DOWNLOAD TO: ', path)

  fileTransfer.download(
    uri,
    path,
    function (entry) {
      cb(undefined, entry.toURL())
    },
    function (error) {
      cb(error)
    }
  )
}

module.exports = {
  downloadFile: downloadFile
}
