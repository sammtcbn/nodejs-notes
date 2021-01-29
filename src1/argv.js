console.log ("argc = " + process.argv.length);

process.argv.forEach(function (val, index, array) {
    console.log ("argv[" + index + ']: ' + val);
});

/* Result:

$ node argv.js 11 22 33 44 55
argc = 7
argv[0]: /usr/bin/node
argv[1]: /home/adv/Documents/spe/node.js/argv.js
argv[2]: 11
argv[3]: 22
argv[4]: 33
argv[5]: 44
argv[6]: 55

*/
