/*
need to npm install ini
Written by sammtcbn 2020.10.26
*/

var fs = require('fs')
var ini = require('ini')

var config = ini.parse(fs.readFileSync('read-ini.ini', 'utf-8'))
console.log (config.member.name)
console.log (config.member.os)
console.log (config.member.ver)

/* Result:

$ cat read-ini.ini
[member]
name=sam
os=win10
ver=1.0.3

$ node read-ini.js
sam
win10
1.0.3

*/
