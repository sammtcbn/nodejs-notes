var str="Hello World";

var str_to_base64 = Buffer.from(str).toString('base64');
console.log (str_to_base64);

var base64_to_str = Buffer.from(str_to_base64, 'base64').toString('ascii');
console.log (base64_to_str);

/* Result:

$ node base64_ex.js
SGVsbG8gV29ybGQ=
Hello World

*/
