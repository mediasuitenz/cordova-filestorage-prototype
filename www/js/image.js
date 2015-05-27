'use strict';

/*
Here I was downloading an image, keeping it in memory as a blob,
and supplying the blob URL which can be displayed in leafet.
There were attempts to save the image in localstorage, but no success yet.
*/

var getUrlFromImageArray = function (arrayBufferView) {
  var blob = new Blob([arrayBufferView], { type: 'image/jpeg' })
  var urlCreator = window.URL || window.webkitURL
  return urlCreator.createObjectURL(blob)
}

var cacheImage = function (url, cb) {
  // var arrayBufferView = localStorage.getItem('imageArray', url)
  // console.log(arrayBufferView)
  // if (arrayBufferView) {
  //   console.log('CACHED')
  //   console.log(getUrlFromImageArray(arrayBufferView))
  //   return cb(undefined, getUrlFromImageArray(arrayBufferView))
  // }

  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'arraybuffer'

  xhr.onload = function onImageLoad() {
    var arrayBufferView = new Uint8Array(this.response)
    // localStorage.setItem('imageArray', arrayBufferView.toString())
    cb(undefined, getUrlFromImageArray(arrayBufferView))
  }

  xhr.onerror = function onImageFail(e) {
    cb(e)
  }

  xhr.send()
}

module.exports = {
  cacheImage: cacheImage
}
