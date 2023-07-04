function funa (value) {
    return new Promise((resolve, reject) => {
        resolve(value);
    })
}

function funb (value) {
    return new Promise((resolve, reject) => {
        resolve(value);
    })
}

function func (value) {
    return new Promise((resolve, reject) => {
        resolve(value);
    })
}

async function asyncProcess() {
    let taskA = await funa ('job-a');
    let taskB = await funb ('job-b');
    let taskC = await func ('job-c');
    console.log(taskA, taskB, taskC);
}

console.log("start");
asyncProcess();
console.log("end");

/* Result:

$ node async_ex2.js
start
end
job-a job-b job-c

*/
