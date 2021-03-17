process.env.LANG = 'en_US';

var cmd1 = "dd if=/dev/zero of=foo.txt bs=5MB count=1";
var result = require('child_process').execSync(cmd1).toString().trim();
console.log (result);

var cmd2 = "ls -la foo.txt";
var result = require('child_process').execSync(cmd2).toString().trim();
console.log (result);

console.log ("done")

/* Result:

$ node child_process_sync.js
1+0 records in
1+0 records out
5000000 bytes (5.0 MB, 4.8 MiB) copied, 0.0095522 s, 523 MB/s

-rw-rw-r-- 1 adv adv 5000000 Apr  7 11:09 foo.txt
done

*/
