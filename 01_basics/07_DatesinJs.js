// Dates
let myDate = new Date()
console.log(myDate);
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.getMilliseconds());
console.log(typeof myDate);
let myDate1 = new Date("2023-10-30");
console.log(myDate1.toLocaleDateString());

let myTimestamp =  Date.now()
console.log(myTimestamp);
console.log(myDate1.getTime());