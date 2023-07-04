/* ref to
https://nodejs.org/dist/latest/docs/api/process.html
*/

console.log ("platform is "  + process.platform);
console.log ("uptime is "    + process.uptime());
console.log ("cwd is "       + process.cwd());
console.log ("arch is "      + process.arch);
console.log ("pid is "       + process.pid);

/* Result in Ubuntu:

$ node process_ex.js
platform is linux
uptime is 0.143
cwd is /home/sam
arch is x64
pid is 7864

*/

/* Result in Windows 10:

>node process_ex.js
platform is win32
uptime is 0.0377468
cwd is D:\
arch is x64
pid is 18532

*/
