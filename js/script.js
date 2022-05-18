// console.log("Hello world!");

// let myName = "Vitalii",
//   yourName = "Viktor";
// console.log(myName);

// myName = yourName;
// console.log(myName);

// console.log((!false && 11) || (18 && !""));

// console.log("35" + -"22");

// if (92 > "110") {
//   console.log("Истина!");
// } else {
//   console.log("Ложь!");
// }

// let question = 92 - "11";
// console.log(typeof question);

// let userInfo = {
//   name: "Вася",
// };
// console.log(userInfo);

// userInfo.age = "30";
// console.log(userInfo);

// delete userInfo.name;
// console.log(userInfo);

// function pow2(num) {
//   return num ** 2;
// }

// const pow2 = (num) => {
//   return num ** 2;
// };

// const pow2 = (num) => num ** 2;

// console.log(pow2(5));

// const sum = (a = 40, b = a * 2) => a + b;
// console.log(sum(42, 5));

// function sumAll(...all) {
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
// }

// const res = sumAll(1, 4, 7);
// console.log(res);

// Function
// function createMember(name) {
//   return function (lastName) {
//     console.log(name + lastName);
//   };
// }

// const logWithLastName = createMember("Vitalii");
// console.log(logWithLastName("Pozniakov"));

// const cars = ["Mazda", "Porche", "Toyota"];
// // // const fib = [1, 1, 2, 3, 5, 8, 13];

// const upperCaseCars = cars.map((car) => car.toUpperCase());
// console.log(upperCaseCars);

// const index = cars.indexOf("Toyota");
// console.log(index);

// console.log(cars.includes("Toyota"));

// // Method
// cars.push("Mitsubishi");
// console.log(cars);

// cars.unshift("Hyundai");
// console.log(cars);

// const firstItem = cars.shift();
// const lastCar = cars.pop();
// console.log(cars);
// console.log(firstItem);

// cars.reverse()
// console.log(cars);

// const text = "Мы изучаем JS";
// const reverseText = text.split("").reverse().join("");
// console.log(reverseText);

// const people = [
//   { name: "Vladolen", budget: 3000 },
//   { name: "VDaria", budget: 5000 },
//   { name: "Maks", budget: 4000 },
// ];

// const allBudget = people
//   .filter((person) => person.budget > 3500)
//   .reduce((acc, person) => {
//     acc += person.budget;
//     return acc;
//   }, 0);

// console.log(allBudget);

// const index = people.findIndex(function (person) {
//   return person.budget === 5000;
// });

// const person = people.find(function (person) {
//   return person.budget === 5000;
// });

// const person = people.find((person) => {
//   return person.budget === 5000;
// });

// const person = people.find((person) => person.budget === 5000);

// console.log(person);

// let findedPerson;
// for (const person of people) {
//   if (person.budget === 5000) {
//     findedPerson = person;
//   }
// }

// const person = {
//   name: "Vladlen",
//   age: 35,
//   language: ["ru", "en", "de"],
//   greet: function () {},
// };

// const { name: personName = "Vitalii", greet, language } = person;
// console.log(personName, language);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
// console.log("key:", key);
// console.log("value:", person[key]);
// console.log("value:", person["name"]);
//   }
// }

// const keys = Object.keys(person);
// // console.log(keys);
// keys.forEach((key) => {
//   console.log("key:", key);
//   console.log("value:", person[key]);
// });

// Object.keys(person).forEach((key) => {
//   console.log("key:", key);
//   console.log("value:", person[key]);
// });

// const logger = {
//   keys() {
//     console.log("Object keys:", Object.keys(this));
//   },

//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       console.log(`${key}: ${this[key]}`);
//     });
//   },
// };

// const bound = logger.keys.bind(person);
// bound();

// logger.keys.call(person);
// logger.keysAndValues.call(person);

// function add(a, b, c) {
//   const result = a + b + c;
//   return result;
// }

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(18));

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result =
//     message.toLowerCase().includes(`spam`) ||
//     message.toLowerCase().includes(`sale`)
//       ? true
//       : false;
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam(`fg`));

// let a = 5;
// let a = 3;
// console.log(a);

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// let shortWord = '';
// shortWord = strSplit[i];

// function findLongestWord(string) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for (var i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// var first = ["Hello. This is line 1 of text.", "and this is another.", "the end", "line 3 here"];
// var second = ["the end", "matches", "line 3", "and this is anoother."];

// for (var i = 0; i < first.length; i++) { //проходимся по первому масиву
//   for (var j = 0; j< second.length; j++) { // ищем соотвествия во втором массиве
//     if(first[i] === second[j]){
//       console.log(first[i]); // если совпадаем делаем что либо с этим значением
//     }
//   }
// }
// }

// function getCommonElements(array1, array2) {
//   let commonElements = [];

//   for (i = 0; i < array1.length; i += 1) {
//     for (j = 0; j < array2.length; j += 1) {
//       let hasCommon = array1[i].includes(array2[j]);

//       if (hasCommon) {
//         commonElements.push(array1[i]);
//       }
//     }

//     return commonElements;
//   }
// }

// function getCommonElements(array1, array2) {
//   let commonElements = [];

//   for (i = 0; i < array2.length; i += 1) {
//     console.log(array2[i]);
//     let hasCommon = array1.includes(array2[i]);
//     console.log(hasCommon);
//     if (hasCommon) {
//       commonElements.push(array2[i]);
//     }
//   }
//   return commonElements;
// }

function includes(array, value) {
for (let i = 0; i < array.length; i += 1) {
   const number = array[i];

  console.log(number);
}

console.log(includes([1, 2, 3, 4, 5], 17));
