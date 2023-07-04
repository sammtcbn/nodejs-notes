/*
ref http://www.webhek.com/post/javascript-async-await-2.html
*/

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};

var start = async function () {
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();

/* Result on Ubuntu 16.04 + node v12.14 :

$ node async_ex1.js
start
end

*/
