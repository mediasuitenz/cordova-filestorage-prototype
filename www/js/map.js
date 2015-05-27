'use strict';

/*
Here I am showing a leaflet map, and am able to toggle
a static image layer.
*/

var L = require('leaflet')
var css = require('fs').readFileSync('./node_modules/leaflet/dist/leaflet.css')
require('insert-css')(css)

var map
var img
var imgShown = false

module.exports = {
  init: function init() {
    map = L.map('map').setView([-43.5214,172.5812], 10)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  },
  toggleStaticImage: function toggleStaticImage(url, bounds) {
    if (!img) {
      img = L.imageOverlay(url, bounds)
    }
    if (imgShown) {
      map.removeLayer(img)
    } else {
      img.addTo(map);
    }
    imgShown = !imgShown
  }
}
