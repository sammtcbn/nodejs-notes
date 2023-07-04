// Get Firmware Version of ADAM-6017 via SNMP
// need to npm install net-snmp
// Written by sammtcbn 2021.11.2

var snmp = require ("net-snmp");

var session = snmp.createSession ("172.22.12.27", "public");

var oids = ["1.3.6.1.4.1.10297.101.1.2.1.1.3.1"];

session.get (oids, function (error, varbinds) {
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++)
            if (snmp.isVarbindError (varbinds[i]))
                console.error (snmp.varbindError (varbinds[i]))
            else
                console.log (varbinds[i].oid + " = " + varbinds[i].value);
    }

    // If done, close the session
    session.close ();
});

session.trap (snmp.TrapType.LinkDown, function (error) {
    if (error)
        console.error (error);
});
