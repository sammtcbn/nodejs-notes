/*
ref:
https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
*/

msg="Hello world";
console.log(msg);
console.log('bright:     ' + '\x1b[1m%s\x1b[0m',  msg);
console.log('dim:        ' + '\x1b[2m%s\x1b[0m',  msg);
console.log('underscore: ' + '\x1b[4m%s\x1b[0m',  msg);
console.log('blink:      ' + '\x1b[5m%s\x1b[0m',  msg);
console.log('reverse:    ' + '\x1b[7m%s\x1b[0m',  msg);
console.log('hidden:     ' + '\x1b[8m%s\x1b[0m',  msg);
console.log('FgBlack:    ' + '\x1b[30m%s\x1b[0m', msg);
console.log('FgRed:      ' + '\x1b[31m%s\x1b[0m', msg);
console.log('FgGreen:    ' + '\x1b[32m%s\x1b[0m', msg);
console.log('FgYellow:   ' + '\x1b[33m%s\x1b[0m', msg);
console.log('FgBlue:     ' + '\x1b[34m%s\x1b[0m', msg);
console.log('FgMagenta:  ' + '\x1b[35m%s\x1b[0m', msg);
console.log('FgCyan:     ' + '\x1b[36m%s\x1b[0m', msg);
console.log('FgWhite:    ' + '\x1b[37m%s\x1b[0m', msg);
console.log('BgBlack:    ' + '\x1b[40m%s\x1b[0m', msg);
console.log('BgRed:      ' + '\x1b[41m%s\x1b[0m', msg);
console.log('BgGreen:    ' + '\x1b[42m%s\x1b[0m', msg);
console.log('BgYellow:   ' + '\x1b[43m%s\x1b[0m', msg);
console.log('BgBlue:     ' + '\x1b[44m%s\x1b[0m', msg);
console.log('BgMagenta:  ' + '\x1b[45m%s\x1b[0m', msg);
console.log('BgCyan:     ' + '\x1b[46m%s\x1b[0m', msg);
console.log('BgWhite:    ' + '\x1b[47m%s\x1b[0m', msg);
console.log('reset:      ' + '\x1b[0m%s\x1b[0m',  msg);
console.log('FgBlack bright:    ' + '\x1b[1;30m%s\x1b[0m', msg);
console.log('FgRed bright:      ' + '\x1b[1;31m%s\x1b[0m', msg);
console.log('FgGreen bright:    ' + '\x1b[1;32m%s\x1b[0m', msg);
console.log('FgYellow bright:   ' + '\x1b[1;33m%s\x1b[0m', msg);
console.log('FgBlue bright:     ' + '\x1b[1;34m%s\x1b[0m', msg);
console.log('FgMagenta bright:  ' + '\x1b[1;35m%s\x1b[0m', msg);
console.log('FgCyan bright:     ' + '\x1b[1;36m%s\x1b[0m', msg);
console.log('FgWhite bright:    ' + '\x1b[1;37m%s\x1b[0m', msg);
