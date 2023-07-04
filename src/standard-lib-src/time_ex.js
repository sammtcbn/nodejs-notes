function timetick_get () {
    let tick = new Date().getTime();
    return tick;
};

let ts = timetick_get ();
console.log (ts);
