const fs = require('fs');

if (fs.existsSync('/etc/passwd')) {
    console.log('exists');
}

if (fs.existsSync('/etc')) {
    console.log('exists');
}

if (fs.existsSync('/abc')) {
    console.log('exists');
}

console.log ('bye');
