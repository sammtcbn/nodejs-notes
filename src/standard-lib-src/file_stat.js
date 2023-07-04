const fs = require('fs');

function show (file) {
    fs.lstat (file, (err, stats) => {
        console.log (file);

        if (err)
            return console.log (err);

        console.log(`Is file: ${stats.isFile()}`);
        console.log(`Is directory: ${stats.isDirectory()}`);
        console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
        console.log(`Is FIFO: ${stats.isFIFO()}`);
        console.log(`Is socket: ${stats.isSocket()}`);
        console.log(`Is character device: ${stats.isCharacterDevice()}`);
        console.log(`Is block device: ${stats.isBlockDevice()}`);
        console.log(' ');
    });
}

show ("/etc");
show ("/etc/passwd");
show ("/dev/sda");
show ("/etc/resolv.conf");

/* Result:

$ node file_stat.js
/etc
Is file: false
Is directory: true
Is symbolic link: false
Is FIFO: false
Is socket: false
Is character device: false
Is block device: false

/etc/passwd
Is file: true
Is directory: false
Is symbolic link: false
Is FIFO: false
Is socket: false
Is character device: false
Is block device: false

/dev/sda
Is file: false
Is directory: false
Is symbolic link: false
Is FIFO: false
Is socket: false
Is character device: false
Is block device: true

/etc/resolv.conf
Is file: false
Is directory: false
Is symbolic link: true
Is FIFO: false
Is socket: false
Is character device: false
Is block device: false

*/
