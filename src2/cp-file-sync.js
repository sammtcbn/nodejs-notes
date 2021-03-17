/*
need to npm install cp-file
Written by sammtcbn 2021.3.17
*/

const cpFile = require('cp-file');

console.log ("start");

cpFile.sync('cp-file_testfile1.txt', 'cp-file_testfile2.txt');

console.log ("end");

/* Result:

$ cat cp-file_testfile1.txt
hello

$ node cp-file_ex.js
start
end

$ cat cp-file_testfile2.txt
hello

*/
