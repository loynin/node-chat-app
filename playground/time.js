// Jan 1st 1970 00:00:00 am
const moment = require('moment');
// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(5, 'year');
// console.log(date.format('MMMM Do, YYYY'));

const date = moment();

console.log(date.format('h:mm A'));