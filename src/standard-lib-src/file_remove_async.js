const fs = require('fs');

const filepath = 'testfile'

fs.unlink(filepath, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log ("file is removed")
})

console.log ("bye")
