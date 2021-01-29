
function myfunc()
{
    var nb = {
        brand: "Dell",
        model: "ABC123",
        year: "2019"
    } 
    return nb;
}

var mynb = myfunc(myfunc);
console.log (mynb);

/* Result:

$ node function_ex2.js
{ brand: 'Dell', model: 'ABC123', year: '2019' }
{ brand: 'Asus', model: 'ABC123', year: '2019' }
*/
