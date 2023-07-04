const fs = require('fs');

function show (file) {
    var stats = fs.lstatSync(file);
    if (stats.isSymbolicLink())
        console.log (file + " is a symbolic link");
    else
        console.log (file + " is NOT a symbolic link");
}

show ("/etc/passwd");
show ("/etc/mtab");
show ("/etc/resolv.conf");


/* Result:

$ node is_symbolic_link.js
/etc/passwd is NOT a symbolic link
/etc/mtab is a symbolic link
/etc/resolv.conf is a symbolic link

*/
