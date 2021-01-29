/*
Before running:
  npm install seq
ref: https://www.npmjs.com/package/seq
Written by sammtcbn 2020.1.3
*/

var fs = require('fs');
var Hash = require('hashish');
var Seq = require('seq');
 
Seq()
    .seq(function () {
        fs.readdir(__dirname, this);
    })
    .flatten()
    .parEach(function (file) {
        fs.stat(__dirname + '/' + file, this.into(file));
    })
    .seq(function () {
        var sizes = Hash.map(this.vars, function (s) { return s.size })
        console.dir(sizes);
    })
;
