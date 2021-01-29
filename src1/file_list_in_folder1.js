const fs = require('fs');

const folderpath = '/etc/ssh';

fs.readdir(folderpath, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});

/* Result:

$ node file_list_in_folder1.js
moduli
ssh_config
ssh_config.d
ssh_host_ecdsa_key
ssh_host_ecdsa_key.pub
ssh_host_ed25519_key
ssh_host_ed25519_key.pub
ssh_host_rsa_key
ssh_host_rsa_key.pub
ssh_import_id
sshd_config
sshd_config.d

*/
