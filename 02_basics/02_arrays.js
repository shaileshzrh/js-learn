const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros.includes("spiderman"));
let newArr = marvel_heros.concat(dc_heros)
console.log(newArr);

// Commonly Used spread operator
const all_heros = [...marvel_heros,...dc_heros]
console.log("B", all_heros);
const mixed_array = [1,2,3, [4,5], 6, [7,[8,9]]]
const flat_array = mixed_array.flat(Infinity)
console.log("C", flat_array)
console.log(Array.isArray("shailesh"));
console.log(Array.from("Shailesh"));
console.log(Array.from({name: "shailesh"} )); // Interesting