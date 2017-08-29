/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
// import * as math from "./math";
// import Animal from "./Animal";

logTitle('Learning ES6');
/* coding examples */

// // spread operator arrays
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const arr1 = ["Mo", "Bo", "Jo"];
// const arr2 = ["Tim", "Bim", "Jim"];
//
// const concatArr = [...arr1, ...arr2]
//
// concatArr.forEach(function(name) {
//   log(name);
// });
//
// const name = "Jimbob";
// const nameToArr = [...name];
//
// nameToArr.forEach(function(char) {
//   log(char);
// });
//
// const addNum = function(n1, n2, n3) {
//   return n1 + n2 + n3;
// }
//
// const nums = [1, 5, 9];
// // const addition = addNum(nums[0], nums[1], nums[2]);
// const addition = addNum(...nums);
// log(addition);
//
//
// // spread operator objects
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const address = {
//   city: "LA",
//   country: "USA",
//   zip: 90003
// }
//
// const fullName = {
//   firstName: "Andy",
//   lastName: "Jackson"
// }
//
// const person = {...address, ...fullName};
//
// log(JSON.stringify(person, null, 2));


// // arrow functions
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // const hello = function() {
// const hello = () => {
//   const es6 = 'ES6';
//   return `Hello ${es6}`;
// };
//
// // const powers = [1,2,3,4,5].map(function(number, index) {
// //   return Math.pow(number, index);
// // });
// const powers = [1,2,3,4,5].map((number, index) => Math.pow(number, index));
//
//
// // const add = function(n1, n2) {
// //   return n1 + n2;
// // };
// const add = (n1, n2) => n1 + n2;
//
// // const milesToKm = function(miles) {
// //   return miles * 1.60934;
// // };
// const milesToKm = (miles) =>  miles * 1.60934;
//
// log(hello());
// log(powers);
// log(add(100,100));
// log(milesToKm(100));


// // lexical this
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const person = {
//   name: "Vo",
//   cars: ["Accord", "Camry"],
//   toString: function() {
//     // log(`${this.name} has ${this.cars}`);
//     this.cars.forEach((car) => {
//       log(`${this.name} has ${car}`);
//     })
//   }
// }
//
// person.toString();


// // Enhanced Object Properties
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const pricePropName = "PRICE";
//
// const calculator = (name, price) => {
//   return {
//     // name: name
//     name,
//     // add: function(n1, n2) {
//     add(n1, n2) {
//       return n1 + n2;
//     },
//     [pricePropName.toLowerCase()]: price,
//   }
// }
//
// const calc = calculator("Casio", 30.88);
// log(calc.name);
// log(calc.add(3, 8));
// log(calc.price);


// // Array Destructuring
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
// // const anna = names[0];
// // const mariam = names[1];
// // const joe = names[2];
//
// const [a, m, j, ...restOfNames] = names;
//
// log(`${a} ${m} ${j}`);
// log(restOfNames);


// // Object Destructuring
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const getUser = () => {
//   return {
//     name: 'John',
//     surname: 'Doe',
//     gender: 'male',
//     address: {
//       country: 'United States',
//       city: 'California',
//       postCode: 'CA',
//       fullAddress: {
//         doorNumber: 22,
//         street: 'LA st'
//       }
//     },
//     age: 29
//   }
// };
//
// const user = getUser();
//
// // const name = user.name;
// // const age = user.age;
// // const country = user.address.country;
// // const doorNumber = user.address.fullAddress.doorNumber;
//
// const {name: theName, age: theAge, address: {country: theCountry}} = user;
// const {address: {fullAddress: {doorNumber: number}}} = user;
//
// log(theName);
// log(theAge);
// log(theCountry);
// log(number);


// // Function default parameters
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const calcPay = (salary, bonus = {
//   teamBonus: 0,
//   employeeBonus: 0,
// }) => {
//   return salary + bonus.teamBonus + bonus.employeeBonus;
// }
//
// log(calcPay(10000, {teamBonus: 1000, employeeBonus: 3000}));


// // Classes
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// class Animal {
//   constructor(name, age) {
//     log(`${name} is an animal and was created...`)
//     this.name = name;
//     this.age = age;
//   }
//
//   static myStaticMethod() {
//     log("My static method within Animal class.");
//   }
//
//   eat() {
//     log(`${this.name} is eating...`);
//     return this;
//   }
//
//   sleeping() {
//     log(`${this.name} is sleeping...`);
//     return this;
//   }
//
//   wake() {
//     log(`${this.name} is waking up...`);
//     return this;
//   }
//
//   getAge() {
//     log(`${this.name} is ${this.age} years old.`);
//     return this;
//   }
// }
//
// class Dog extends Animal {
//   constructor(name, age, breed) {
//     super(name, age);
//     this.breed = breed;
//   }
//
//   getBreed() {
//     log(`${this.name} is a ${this.breed}.`);
//     return this;
//   }
//
//   getAgeOfDog() {
//     super.getAge();
//     return this;
//   }
// }
//
// class Cat extends Animal {
//   constructor(name, age) {
//     super(name, age);
//   }
//
//   getAgeOfCat() {
//     super.getAge();
//     return this;
//   }
// }
//
// Animal.myStaticMethod();
//
// const bobby = new Animal("bobby", 2);
// bobby.eat().sleeping().wake().getAge();
//
// const mike = new Dog("Mike", 1, "husky");
// mike.getBreed().getAgeOfDog();
//
// const jim = new Cat("Jim", 2);
// jim.getAgeOfCat();
// jim.eat().sleeping().wake();


// // Promises
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("data response from server");
//   }, 2000);
//
//   setTimeout(() => {
//     reject("error, no response from server");
//   }, 4000);
// });
//
// promise.then((response) => {
//   log(response);
// }).catch((error) => {
//   log(error);
// })
//
// const namesPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(['Anna', 'Jones', 'Ali', 'Jake']);
//   }, 3000);
//
//   setTimeout(() => {
//     reject("no data back from the server, there was an error");
//   }, 5000);
// });
//
// const surnamesPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(['Williams', 'Bravo', 'Mohammado', 'Smith']);
//   }, 3000);
//
//   setTimeout(() => {
//     reject("no data back from the server, there was an error");
//   }, 5000);
// });
//
// Promise.all([namesPromise, surnamesPromise]).then((data) => {
//   const [names, surnames] = data;
//   for (var i = 0; i < names.length; i++) {
//     const name = names[i];
//     const surname = surnames[i];
//     log(`${name} ${surname}`);
//   }
// }).catch((error) => {
//   log(error);
// })
//
// // Promises, Fetch API
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const getRandomUsers = (num) => {
//   const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${num}`);
//   fetchRandomUsers.then((data) => {
//     data.json().then((randomUsers) => {
//       log(JSON.stringify(randomUsers.results.length));
//
//       randomUsers.results.forEach((user) => {
//         const {gender, email} = user;
//         log(`${gender} - ${email}`);
//       })
//     })
//   });
// }
//
// getRandomUsers(10);


// Generators
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
