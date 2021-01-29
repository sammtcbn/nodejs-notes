// need to install mqtt module by command:
//     npm install minimist
const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    string: ["ip"],
    string: ["port"],
    string: ["username"],
    string: ["password"],
});

console.log ('ip      : ' + args.ip);
console.log ('port    : ' + args.port);
console.log ('username: ' + args.username);
console.log ('password: ' + args.password);

if (typeof args.port === 'undefined')
    console.log ('need to assign port');

/* Result:

$ node minimist_ex.js --ip=172.0.0.1 --username=sam
ip      : 172.0.0.1
port    : undefined
username: sam
password: undefined
need to assign port

*/
