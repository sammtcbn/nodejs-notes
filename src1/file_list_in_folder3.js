const fs = require('fs');
const path = require("path");

const folderpath = '/etc/samba';

fs.readdir(folderpath, (err, files) => {
    files.forEach(file => {
        const extname  = path.extname (file);
        const basename = path.basename (file, extname);
        const absolutePath = path.resolve (folderpath, file);
        var stats = fs.statSync(absolutePath);
        console.log ("file is " + file);
        console.log ("absolutePath is " + absolutePath);
        if (stats.isFile())
        {
            console.log(absolutePath + " is file");
            console.log ("basename is " + basename);
            console.log ("extname is " + extname);
            
        }
        else if (stats.isDirectory())
        {
            console.log(absolutePath + " is directory");
        }
        console.log (" ");
    });
});

/* Result:

$ node file_list_in_folder3.js
file is gdbcommands
absolutePath is /etc/samba/gdbcommands
/etc/samba/gdbcommands is file
basename is gdbcommands
extname is

file is smb.conf
absolutePath is /etc/samba/smb.conf
/etc/samba/smb.conf is file
basename is smb
extname is .conf

file is smb.conf.ori
absolutePath is /etc/samba/smb.conf.ori
/etc/samba/smb.conf.ori is file
basename is smb.conf
extname is .ori

file is tls
absolutePath is /etc/samba/tls
/etc/samba/tls is directory

*/
