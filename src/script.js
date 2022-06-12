// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// const word = prompt(`Please input your word`);

// if (word === null || word.trim() === ``) {
//   alert(`Invalid value`);
// } else if (word.length % 2 === 0) {
//   alert(word.slice(word.length / 2 - 1, word.length / 2 + 1));
// } else if (word.length % 2 !== 0) {
//   alert(word.slice(Math.ceil(word.length / 2) - 1, Math.ceil(word.length / 2)));
// }


// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// // Result: ["a", "b", "c", 0, 1, 2, 3];

// console.log(a.concat(c, b[0], b[1]))

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const b = a.slice() 

// b.copyWithin(3, 0, 3)



// // // Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// // console.log(b.splice(3, 3, `a`, `b`, `c`))

// console.log(b)


// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// const b = a.slice() 

// b.fill(0, 5, 8)


// console.log(b)


// const a = [1, 2, [3, 4], [5, 6], 7];

// //  Result: [1, 2, 3, 4, 5, 6, 7]

// const b = a.flat()

// console.log(b)

// const result = []

// for (let i = 0; i < a.length; i += 1) {
//   if (Array.isArray(a[i])) {
// result.push(a[i][0], a[i][1])
//   } else {result.push(a[i])}
// }

// console.log(result)



const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k']

// for (let i = a.length - 1; i > 0 ; i -= 1) {
// if (a[i] === `n`) {
// console.log(i) 
// break 
// }
// }

console.log (a.lastIndexOf(`n`))

const Joi = require('joi');

