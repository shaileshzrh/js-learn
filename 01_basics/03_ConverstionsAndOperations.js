let name = "shailesh"
let score = 33
console.log(typeof score);
console.log(typeof(score));
//// "33" => 33
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

//// "33abc" => NaN (Not a Number)
score= "33aa" 
let valueInNumber1 = Number(score)
console.log(valueInNumber1);
////null =>  0
score= null 
let valueInNumber2 = Number(score)
console.log(valueInNumber2); 
////true =>  1
score= true 
let valueInNumber3 = Number(score)
console.log(valueInNumber3); 

//// 1 => true
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//// "" => false
let islog = ""
let booleanIsLoggedIn1 = Boolean(islog)
console.log(booleanIsLoggedIn1);

//// "shailesh" => true
let islogname = "shailesh"
let booleanIsLoggedIn2 = Boolean(islogname)
console.log(booleanIsLoggedIn2);

//// 103 => "103"
let amt = 103
let stringNumber = String(amt)
console.log(stringNumber);


