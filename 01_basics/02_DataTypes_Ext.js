//Primitive
/// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
// id not equal to anotherId
console.log(id === anotherId);

// Reference (Non-Primitive)
// Array, Objects, Functions

// Is Java Script Dynamic keytype or static ?
// A: Dynamic, as the types are not pre-defined
// Java Script cousin TypeScript is static/strictly defined.

// Array
const heros =  ["a", "b", "c"]
console.log(heros);
//Objects {}
let customer = {
    name: "shailesh",
    age: 30
}
//console.log(customer);
// function
const myFunction = function(){
    console.log("first function");
}
// Reference study of return types
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

//------------------Memory---------
// Stack & Heap Memory

// Stack (primitive), Heap (Non-Primitive)
//DOG KAT PIA PAPA MAMA NOS SKIN HAND NAIL LAG FAS AIS ARM TAMI AIS TIT HAR FQT IBRAS 

const myName =  new String("Shailesh Agarwal")
console.log(myName.charAt(1));
console.log(myName.length);
console.log(myName.indexOf("A"));
const firstName = myName.substring(0, 8)
console.log(firstName);
const partName = myName.slice(-8,12)
console.log(partName);
const fName = myName.split(" ");
console.log(fName[0]);