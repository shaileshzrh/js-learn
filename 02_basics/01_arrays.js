//array []
const myArr = [ 0,1,2,3,4,5]
console.log(myArr[0]);
const myArr2 = new Array(1,2,3,4);
console.log(myArr2.length);
// Array Method
myArr.push(6);
myArr.push(7);
myArr.pop()
//myArr.unshift(9)
myArr.shift()
console.log(myArr);
console.log(myArr.includes(5));
console.log(myArr.indexOf(5));
const newArr = myArr.join()
// return the array as string
console.log(newArr);
console.log(typeof newArr);


//myArr.forEach(it: ())

// Shallow Copy of an object whose properties share the same referneces
// Deep Copy of an object whose properties do not share the same reference