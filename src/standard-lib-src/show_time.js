function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}

function getMyDate1() {
  var d = new Date();
   return d;
};

function getMyDate2() {
  var d = new Date();
  return d.toISOString().replace(/T/, ' ').replace(/\..+/, '')
}

function getMyDate3() {
    var d = new Date();
    var e = convertUTCDateToLocalDate(d);
    return e.toISOString().replace(/T/, ' ').replace(/\..+/, '')
}

var time1 = getMyDate1();
console.log (time1);

var time2 = getMyDate2();
console.log (time2);

var time3 = getMyDate3();
console.log (time3);

/* Result:

$ node show_time.js
2019-01-17T07:28:47.690Z
2019-01-17 07:28:47
2019-01-17 15:28:47

*/
