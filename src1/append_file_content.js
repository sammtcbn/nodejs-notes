const fs = require('fs');

var append = function(filename, str, callback){
    fs.readFile(filename, function(err1, content){
        if(err1) console.log(err1);

        var newContent = content.toString() + str;
        fs.writeFile(filename, newContent, function(err2){
            if(err2) console.log(err2);

            callback(err1 || err2);
        });
    });
};

append('append_file_content.txt', 'Hello World', function(err){
    if(err) console.log(err);
    console.log('finish');
});

/* Result:

$ cat append_file_content.txt
123

$ node append_file_content.js
finish

$ cat append_file_content.txt
123Hello World

*/
