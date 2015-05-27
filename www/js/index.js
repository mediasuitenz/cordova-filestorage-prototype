'use strict';

var map = require('./map')
var image = require('./image')
var file = require('./file')
var $ = require('jquery')

var isBrowser = 0
var ready = isBrowser ? 'ready' : 'deviceready'
$(document).on(ready, function () {

  map.init()

  var imageUrl = 'http://api.tiles.mapbox.com/v4/mediasuite.kd2jfdae/174.85172,-41.12270,13/155x102.png?access_token=pk.eyJ1IjoibWVkaWFzdWl0ZSIsImEiOiJ0LXVxaXRZIn0.mojcG58Ox951Pumx0UdJ_g'

  // image.cacheImage(, function (err, url) {
  //   imageUrl = url
  // })
  $('#staticButton').on('click', function () {
    console.log('CALLED CALLED CALLED CALLED CALLED ')
    file.loadFile(imageUrl, 'images/testImg1.png', function (err, path) {
      if (err) {
        console.log('download error source ' + err.source)
        console.log('download error target ' + err.target)
        console.log('upload error code ' + err.code)
      } else {
        console.log('SHOWING IMG ON MAP:', path)
        map.toggleStaticImage(path, [[-43.62262, 172.68359], [-43.49862, 172.94415]])
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
