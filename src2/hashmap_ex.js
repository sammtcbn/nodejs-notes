/* need to install hashmap by command:
     npm install hashmap
*/

var HashMap = require('hashmap');
var map = new HashMap();

map.set("001", "John");
map.set("002", "Bob");

var a = map.get("002");
console.log (a);

var b = map.get("001");
console.log (b);

var c = map.get("003");
console.log (c);

/* Result:

$ node hashmap_ex.js
Bob
John
undefined

*/
