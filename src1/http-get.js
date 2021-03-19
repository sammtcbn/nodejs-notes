const http = require('http');

const url = "http://172.22.12.139:9051/version";

http.get(url, (res) => {
  let data = ""

  res.on("data", d => {
    data += d
  })

  res.on("end", () => {
    console.log(data)
  })    
})

console.log ("bye");

/* Result:

$ node http-get.js
bye
v1.0.1

*/
