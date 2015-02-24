#!/usr/bin/env node

var ndjson = require('ndjson')
var geojson = require('kml-placemarks-to-geojson')
var request = require('request')

request('http://monitor.eduroam.org/kml/all.kml')
  .pipe(geojson())
  .pipe(ndjson.stringify())
  .pipe(process.stdout)