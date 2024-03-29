// need to install ssh2 by command:
//     npm install ssh2
// ref to https://github.com/mscdex/ssh2

//const { readFileSync } = require('fs');

const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
  console.log('Client :: ready');
  conn.exec('uptime', (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', (data) => {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
      console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: '172.22.12.71',
  port: 22,
  username: 'sam',
  password: '1234'
  //privateKey: readFileSync('/path/to/my/key')
});
