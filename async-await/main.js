var concatenateNames = require('./fn');


var databaseName = 'first';
var databaseSurname = 'last';

(async () => {

 var fullname = await concatenateNames(databaseName, databaseSurname);
console.log(`and here is ${fullname}`)

})()