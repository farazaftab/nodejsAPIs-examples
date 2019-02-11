
(async () => {
     const sleep = require('util').promisify(setTimeout);
     process.send({
         count: process.argv[2],
         msg: 'Child',
     });
     process.on('message', (res) => {
         console.log(`Message: Parent when index number ${res.count} send Message: ${res.msg} `);
       });
       await sleep(200);
       process.exit(0);
   })()
 
   
