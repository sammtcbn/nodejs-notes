/*
need to npm install systemd-mon
ref to https://www.npmjs.com/package/systemd-mon
Written by sammtcbn 2020.1.14
*/

const systemd = require("systemd-mon");
var serviceName = "smbd";

systemd.start(serviceName);
systemd.stop(serviceName);
systemd.restart(serviceName);
