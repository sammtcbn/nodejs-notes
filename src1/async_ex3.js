function downloadFile() {
    return new Promise((resolve, reject) => {
        const http = require('http');
        const fs = require('fs');
        const file = fs.createWriteStream("async_ex3.jpg");
        const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
            response.pipe(file);
            console.log("download done");
            resolve("Success");
        });
    })
}

function showData() {
    return new Promise((resolve, reject) => {
        console.log ("data is 100");
        resolve("Success");
    })
}

async function testall(callback) {
    var result1 = await downloadFile();
    var result2 = await showData();
    console.log ("all test done");
    callback("test good");
}

testall(function(result){
    console.log (result);
})

console.log ("buttom");

/* Result:

$ node async_ex3.js
buttom
download done
data is 100
all test done
test good

*/
