const fs = require('fs');

const filepath = 'testfile'

try {
    fs.unlinkSync(filepath)
} catch(err) {
    console.error(err)
}
