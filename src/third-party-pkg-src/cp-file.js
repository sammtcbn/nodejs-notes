/*
need to npm install cp-file
Written by sammtcbn 2020.1.13
*/

const cpFile = require('cp-file');

console.log ("start");

(async () => {
	await cpFile('cp-file_testfile1.txt', 'cp-file_testfile2.txt');
	console.log('File copied');
})();

console.log ("end");

/* Result:

$ cat cp-file_testfile1.txt
hello

$ node cp-file_ex.js
start
end
File copied

$ cat cp-file_testfile2.txt
hello

*/
