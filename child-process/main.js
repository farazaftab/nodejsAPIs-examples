const fs = require('fs');
const {
    fork
} = require('child_process');



(async () => {
    const sleep = require('util').promisify(setTimeout);
    for (var i = 0; i < 3; i++) {
        var workerProcess = fork('child-process/support.js', [i]);
        workerProcess.on('message', (res) => {
            console.log(`Message: Child no ${res.count} send Message: ${res.msg} `);
        });
        workerProcess.on('exit', function (code) {
            console.log(`Child process  ${i} exited with exit code` + code);
        });
        workerProcess.send({
            count: i,
            msg: 'Parent',
        });
        await sleep(300);
    }
})()