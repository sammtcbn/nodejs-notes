function intervalFunc() {
    console.log ('enter intervalFunc now');
}
setInterval (intervalFunc, 1000);

/* Result:

$ node interval.js
enter intervalFunc now
enter intervalFunc now
enter intervalFunc now
...

*/
