/*
 * need to apt install imagemagick
 * need to npm install screenshot-desktop
 * Written by sammtcbn 2021.1.7
 * */

const screenshot = require('screenshot-desktop')
const fs = require('fs')

screenshot().then((img) => {
  fs.writeFile('screenshot_ex.jpg', img, function (err) {
    if (err) {
      throw err
    }
    console.log('written to screenshot_ex.jpg')
  })
}).catch((err) => {
  throw err
})

/* Result

User need to login in UI mode, then execute:

$ node screenshot_ex.js

*/
