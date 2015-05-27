'use strict';

var $ = require('jquery')
var $iframe

// NOT GOOD - doesn't provide any controls,
// shows a zoomed in pdf with no zoom or scrolling
var togglePdfFrame = function (path) {
  if ($iframe) {
    console.log('DESTROYING IFRAME')
    $iframe.remove()
    $iframe = undefined
  } else {
    console.log('CREATING IFRAME FOR PDF: ', path)
    $iframe = $('<iframe />')
    $iframe.attr('src', path);
    $iframe.appendTo('#frame');
  }
  $('#frame').toggleClass('hide')
  $('#map').toggleClass('hide')
}

// Best option, uses inAppBrowser plugin
// See http://docs.phonegap.com/en/edge/cordova_inappbrowser_inappbrowser.md.html
var openPdfTab = function (path) {
  window.open(path, '_blank', 'location=no');
}

// Didn't seem to be working
var openPdfSystem = function (path) {
  window.open(path, '_system', 'location=no');
}

module.exports = {
  togglePdfFrame: togglePdfFrame,
  openPdfTab: openPdfTab,
  openPdfSystem: openPdfSystem,
}
