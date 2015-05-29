'use strict';

var mapLib = require('./map')
var imageLib = require('./image')
var fileLib = require('./file')
var pdfLib = require('./pdf')
var $ = require('jquery')

var isBrowser = 0
var ready = isBrowser ? 'ready' : 'deviceready'
$(document).on(ready, function () {

  mapLib.init()

  var imageUrl = 'http://api.tiles.mapbox.com/v4/mediasuite.kd2jfdae/174.85172,-41.12270,13/1280x1020.png?access_token=pk.eyJ1IjoibWVkaWFzdWl0ZSIsImEiOiJ0LXVxaXRZIn0.mojcG58Ox951Pumx0UdJ_g'

  // image.cacheImage(imageUrl, function (err, url) {
  //   imageUrl = url
  // })
  $('#staticButton').on('click', function () {
    fileLib.loadFile(imageUrl, 'images/testImg1.png', function (err, path) {
      if (err) {
        console.log('download error source ' + err.source)
        console.log('download error target ' + err.target)
        console.log('upload error code ' + err.code)
      } else {
        console.log('SHOWING IMG ON MAP:', path)
        mapLib.toggleStaticImage(path, [[-43.62262, 172.68359], [-43.49862, 172.94415]])
      }
    })
  })

  var pdfUrl = 'http://scholar.princeton.edu/sites/default/files/oversize_pdf_test_0.pdf'
  $('#staticButton2').on('click', function () {
    fileLib.loadFile(pdfUrl, 'pdfs/oversize_pdf_test_0.pdf', function (err, path) {
      if (err) {
        console.log('download error source ' + err.source)
        console.log('download error target ' + err.target)
        console.log('upload error code ' + err.code)
      } else {
        pdfLib.openPdfTab(path)
      }
    })
  })
})

$(document).on('offline', function () {
  console.log('DEVICE HAS GONE OFFLINE')
}, false)

$(document).on('online', function () {
  console.log('DEVICE HAS GONE ONLINE')
}, false)
