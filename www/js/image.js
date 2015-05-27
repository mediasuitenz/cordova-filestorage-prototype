'use strict';

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
