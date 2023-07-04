function memorySizeStr(totalmem)
{
    var gigaByte = 1 / (Math.pow(1024, 3));
    let totmem = totalmem * gigaByte;
    var strMemCapacity = totmem.toFixed(2) + "GB";
    return strMemCapacity;
}

var os = require ('os');
console.log ("os type = " + os.type());
console.log ("os platform = " + os.platform());
console.log ("os hostname = " + os.hostname());
console.log ("os release = " + os.release());
console.log ("os uptime = " + os.uptime());
console.log ("os tmpdir = " + os.tmpdir());

var totalmemSize = os.totalmem();
console.log ("os totalmem = " + totalmemSize + " (" + memorySizeStr(totalmemSize) + ")");

