const fs = require('fs');

const oldFile = 'testfile'
const newFile = 'testfile2'

try {
    fs.copyFileSync(oldFile, newFile);
    console.log ("copied")
} catch(err) {
    console.error(err)
}

console.log ("bye")
