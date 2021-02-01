const fs = require('fs');

const filepath = 'testfile'

try {
    fs.unlinkSync(filepath)
    console.log ("file is removed")
} catch(err) {
    console.error(err)
}

console.log ("bye")
