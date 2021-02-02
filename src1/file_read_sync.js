const fs = require('fs');

try {
    var content = fs.readFileSync('testfile', 'utf-8');
    console.log (content);
} catch (err) {
    console.log (err);
}

console.log ("bye");
