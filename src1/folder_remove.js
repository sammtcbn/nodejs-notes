/* removes the folder synchronously
*/
const fs = require('fs');
const dir = 'tmp';

try {
    fs.rmdirSync(dir, { recursive: true });
    console.log(`${dir} is removed!`);
} catch (err) {
    console.error(`Fail to remove ${dir}.`);
}

console.log ('bye');
