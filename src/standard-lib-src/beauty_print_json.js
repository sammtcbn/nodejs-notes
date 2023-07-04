var jsonString = '{"name":"John","age":50,"cars":[ "Ford", "Nissan", "Toyota" ]}';
var jsonPretty = JSON.stringify(JSON.parse(jsonString),null,2);  
console.log(jsonPretty);

/* Result:

$ node beauty_print_json.js
{
  "name": "John",
  "age": 50,
  "cars": [
    "Ford",
    "Nissan",
    "Toyota"
  ]
}

*/
