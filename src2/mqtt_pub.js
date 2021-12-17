// need to install mqtt module by command:
//     npm install mqtt

//var broker = 'localhost';
var broker = 'test.mosquitto.org';
var topic = 'sam/test';
var msg = 'nodejs mqtt test'
var mqtt = require ('mqtt');
var opt = {
    port:1883,
    clientId: 'nodejs'
};

var client = mqtt.connect('mqtt://' + broker, opt);
client.on ('connect', function () {
    console.log (broker + ' connected');
    client.publish(topic, msg , function() {
        console.log("Message is published");
        client.end();
    });
});
