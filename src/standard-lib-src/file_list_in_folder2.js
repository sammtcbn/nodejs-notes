const fs = require('fs');

const folderpath = '/etc/ssh';

fs.readdir(folderpath, (err, files) => {
    files.forEach(file => {
        var fullpath= folderpath + "/" + file;
        var stats = fs.statSync(fullpath);
        if (stats.isFile())
            console.log(fullpath + " is file");
        if (stats.isDirectory())
            console.log(fullpath + " is directory");
    });
});

/* Result:

$ node file_list_in_folder2.js
/etc/ssh/moduli is file
/etc/ssh/ssh_config is file
/etc/ssh/ssh_config.d is directory
/etc/ssh/ssh_host_ecdsa_key is file
/etc/ssh/ssh_host_ecdsa_key.pub is file
/etc/ssh/ssh_host_ed25519_key is file
/etc/ssh/ssh_host_ed25519_key.pub is file
/etc/ssh/ssh_host_rsa_key is file
/etc/ssh/ssh_host_rsa_key.pub is file
/etc/ssh/ssh_import_id is file
/etc/ssh/sshd_config is file
/etc/ssh/sshd_config.d is directory

*/
