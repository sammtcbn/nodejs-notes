var options = {
    ip: "127.0.0.1",
    port: 161,
    retries: 2,
    timeout: 5000
};

options.retries += 1;
const keys = Object.keys (options);
console.log ("ip is "      + options.ip);
console.log ("port is "    + options.port);
console.log ("retries is " + options.retries);
console.log ("timeout is " + options.timeout);
console.log ("keys is "    + keys);

/* Result:

$ node objects_ex.js
ip is 127.0.0.1
port is 161
retries is 3
timeout is 5000
keys is ip,port,retries,timeout

*/
