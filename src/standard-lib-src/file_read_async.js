const fs = require('fs');

fs.readFile('testfile', 'utf-8' , function (err, content) {
    if (err) throw err;
    console.log (content);
});

console.log ("bye");
