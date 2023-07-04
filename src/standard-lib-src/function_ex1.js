var a=5;
var b=3;

var add = function (a,b) {
    return a+b;
}

function sub (a,b) {
    return a-b;
}

function show () {
    for (var i in arguments) {
        console.log (i, ":", arguments[i]);
    }
}

console.log (a+"+"+b+"="+add(a,b));
console.log (a+"-"+b+"="+sub(a,b));

show ('hello', 9527, 1234);

/* Result:

$ node function_ex.js
5+3=8
5-3=2
0 : hello
1 : 9527
2 : 1234

*/
