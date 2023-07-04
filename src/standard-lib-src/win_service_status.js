var serviceName = "myservice";

var child = require('child_process').exec(`sc query ${serviceName} | findstr /i STATE `, function (error, stdout, stderr) {
    var serviceStatus = "unknow";
    //console.log(stdout);

    var words = stdout.split(' ')
    //console.log(words);

    if (words.includes('RUNNING') == true)
        serviceStatus = "running";
    else if (words.includes('STOPPED') == true)
        serviceStatus = "stopped";
    else if (words.includes('START_PENDING') == true)
        serviceStatus = "start pending";
    else if (words.includes('STOP_PENDING') == true)
        serviceStatus = "stop pending";

    console.log (serviceName + " service: " + serviceStatus);
});


