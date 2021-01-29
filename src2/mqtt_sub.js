// need to install mqtt module by command:
//     npm install mqtt

//var broker = 'localhost';
var broker = 'test.mosquitto.org';
var topic = '#';
var mqtt = require ('mqtt');
var opt = {
    port:1883,
    clientId: 'nodejs'
};

var client = mqtt.connect('mqtt://' + broker, opt);
client.on ('connect', function () {
    console.log (broker + ' connected');
    client.subscribe (topic);
});

client.on ('message', function (topic, msg) {
    console.log (topic + ' - ' + msg.toString());
});
