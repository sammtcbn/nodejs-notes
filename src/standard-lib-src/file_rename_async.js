const fs = require('fs');

fs.rename('testfile', 'testfile2', function (err) {
    if (err) throw err;
    console.log('renamed complete');
});

console.log("bye");
