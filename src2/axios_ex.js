/* need npm install axios
*/

var axios = require('axios');

axios({
    method: 'get',
    baseURL: 'https://randomuser.me/api/',
})
.then((result) => { 
    //console.error(result.data) }
    console.log(JSON.stringify(result.data, null, 2))
})
.catch((err) => { console.error(err) })

/* Result:

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Angie",
        "last": "Abdullahi"
      },
      "location": {
        "street": {
          "number": 6111,
          "name": "Kamilletuin"
        },
        "city": "Renesse",
        "state": "Utrecht",
        "country": "Netherlands",
        "postcode": 45160,
        "coordinates": {
          "latitude": "42.0506",
          "longitude": "48.1029"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "angie.abdullahi@example.com",
      "login": {
        "uuid": "00a19dbc-649f-4a01-9158-9e130214a781",
        "username": "orangemeercat938",
        "password": "fairlane",
        "salt": "sJ7PbhZg",
        "md5": "8d73f8d376d909ae95739f551de24112",
        "sha1": "4bffa247a31e132ab662ed42cbd8c8df65888193",
        "sha256": "98a86d4221bffc1e8bc50476e4e6c007e76a45ca1c182c11125bcdc7ed3e90c2"
      },
      "dob": {
        "date": "1951-01-10T18:49:30.608Z",
        "age": 70
      },
      "registered": {
        "date": "2005-07-23T06:59:33.056Z",
        "age": 16
      },
      "phone": "(112)-645-0885",
      "cell": "(802)-612-9444",
      "id": {
        "name": "BSN",
        "value": "13469667"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/1.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
      },
      "nat": "NL"
    }
  ],
  "info": {
    "seed": "419d9d99063baadf",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}

*/
