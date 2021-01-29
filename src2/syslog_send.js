// need to install syslog-client by command:
//     npm install syslog-client
// ref to https://www.npmjs.com/package/syslog-client
var syslog_server_ip = "172.22.12.56";
var syslog = require("syslog-client");
var client = syslog.createClient(syslog_server_ip);
client.log("Hello World");
