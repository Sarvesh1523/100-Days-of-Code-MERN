// Higher Order Function
// Callback

// a callback function, the function could be any name
let callback = (n) => {
  return n ** 2;
};
let cube = (callback, n) => {
  return callback(n) * n;
};
console.log(cube(callback, 3)); //27

// Returning function
// Higher order functions return function as a value​

// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };

  return doSomething;
};
console.log(higherOrder(2)(3)(10));

// Example
let numbers = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  const callBack_func = function (element) {
    sum += element;
  };
  arr.forEach(callBack_func);
  return sum;
};
console.log(sumArray(numbers));

// Example Anonymous
const sumArrayAnno = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};
console.log(sumArrayAnno(numbers));

// Example for same another method
const sumArrayFunc = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArrayFunc(numbers));

// setting time

// In JavaScript we can execute some activity on certain interval of time or we can schedule(wait) for sometime to execute some activities.

// setInterval
// setTimeout

// setInterval
// The setInterval global method take a callback function and a duration as a parameter.

function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 2000); // it prints hello in every 2 seconds

// setTimeout
// The setTimeout global method take a callback function and a duration as a parameter.
setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.

// Functional Programming
// forEach

let sum = 0;
numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));

console.log(sum);

// 1st method
sum = 0;
numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum += num));

console.log(sum);

// 2nd method
sum = 0;
numbers.forEach((element) => {
  sum += element;
});
console.log(sum);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "India"];
countries.forEach((element) => console.log(element.toUpperCase()));

// map
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
// 1st Method
numbers = [1, 2, 3, 4, 5];
let numbersSquare = numbers.map((num) => num * num);

console.log(numbersSquare);

numbers = [1, 2, 3, 4, 5];
numbersSquare = numbers.map((num) => {
  return num * num;
});

console.log(numbersSquare);

// 1st Method
let names = ["Sarvesh", "Denson", "Ajitha", "Praisy"];
let namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

// 2nd Method
namesToUpperCase = names.map((name) => {
  return name.toUpperCase();
});
console.log(namesToUpperCase);

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

let countriesFirstThreeLetters = countries.map((country) => {
  return country.toUpperCase().slice(0, 3);
});

console.log(countriesFirstThreeLetters);

// filter
// Filter: Filter out items which full fill filtering conditions and return a new array.

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

let scores = [
  { name: "Sarvesh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEight = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEight);

// reduce
// The reduce() method reduces the array to a single value.

numbers = [1, 2, 3, 4, 5];
sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

// every
// every: Check if all the elements are similar in one aspect. It returns boolean

names = ["Sarvesh", "Mathias", "Elias", "Brook"];
let areAllStr = names.every((name) => typeof name === "string");

console.log(areAllStr);

let bools = [true, true, true, true];
const areAllTrue = bools.every((b) => {
  return b === true;
});

console.log(areAllTrue); //true

// find
// find: Return the first element which satisfies the condition

let ages = [24, 22, 25, 32, 35, 18];
let age = ages.find((age) => age > 20);

console.log(age);

names = ["Sarvesh", "Mathias", "Elias", "Brook"];
let result = names.find((name) => name.length >= 7);
console.log(result);

scores = [
  { name: "Sarvesh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score = scores.find((user) => {
  return user.score > 80;
});
console.log(score);

// findIndex
// findIndex: Return the position of the first element which satisfies the condition

names = ["Sarvesh", "Mathias", "Elias", "Brook"];
ages = [24, 22, 25, 32, 35, 18];

result = names.findIndex((name) => name.length > 7);
console.log(result); // 0

age = ages.findIndex((age) => age < 20);
console.log(age); // 5

// some
// some: Check if some of the elements are similar in one aspect. It returns boolean

names = ["Asabeneh", "Mathias", "Elias", "Brook"];
bools = [true, false, true, true];

const areSomeTrue = bools.some((b) => {
  return b === true;
});

console.log(areSomeTrue); //true

areAllStr = names.some((name) => typeof name === "number");
console.log(areAllStr); // false

// sort
// Sorting string values

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

// Sorting Numeric values

// As you can see in the example below, 100 came first after sorted in ascending order.
// Sort converts items to string , since '100' and other numbers compared,
// 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside
// the sort method, which return a negative, zero or positive

numbers = [9.81, 3.14, 100, 37];

// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()); //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers); // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); //[100, 37, 9.81, 3.14]

// Sorting Object Arrays
// When ever we sort objects in an array. We use the object key to compare. Lets see the example below.
// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1;
//   if (a.key > b.key) return 1;
//   return 0;
// });

// // or

// objArr.sort(function (a, b) {
//   if (a["key"] < b["key"]) return -1;
//   if (a["key"] > b["key"]) return 1;
//   return 0;
// });

users = [
  { name: "Sarvesh", age: 23 },
  { name: "Brook", age: 50 },
  { name: "Eyo", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
//[{…}, {…}, {…}, {…}]

users.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
