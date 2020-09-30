// Set and Maps

// Set is a collection of elements. Set can only contains unique elements. Lets see how to create a set

// Creating an empty set
let companies = new Set();
console.log(companies);

let languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

let setOfLangauges = new Set(languages);
console.log(setOfLangauges);

setOfLangauges = new Set(languages);

for (const language of setOfLangauges) {
  console.log(language);
}

// Adding an element to a set

companies = new Set(); // creating an empty set
console.log(companies.size); // 0

companies.add("Google"); // add element to the set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");

console.log(companies.size); // 5 elements in the set
console.log(companies);

companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
setOfCompanies = new Set();
for (const company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);

// Deleting an element a set
// We can delete an element from a set using a delete method.
console.log(setOfCompanies.delete("Google"));
console.log(setOfCompanies.size); // 4 elements left in the set

// Checking an element in the set
// The has method can help to know if a certain element exists in a set.
console.log(setOfCompanies.has("Apple")); // false
console.log(setOfCompanies.has("Facebook")); // true

// Clearing the set
// It removes all the elements from a set.

setOfCompanies.clear();
console.log(setOfCompanies);

//
//
// Use Case 1 - Use unique item to count no of occurence
languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

//
//
// Use Case 2 -Count unique item
numbers = [5, 3, 2, 5, 5, 9, 4, 5];
setOfNumbers = new Set(numbers);

console.log(setOfNumbers);

// Union of sets
// To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

// Intersection of sets
// To find an intersection of two sets can be achieved using filter. Lets find the union of set A and set B (A ∩ B)

a = [1, 2, 3, 4, 5];
b = [3, 4, 5, 6];

A = new Set(a);
B = new Set(b);

c = a.filter((num) => B.has(num));
C = new Set(c);

console.log(C);

// Difference of sets

// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

a = [1, 2, 3, 4, 5];
b = [3, 4, 5, 6];

A = new Set(a);
B = new Set(b);

c = a.filter((num) => !B.has(num));
C = new Set(c);

console.log(C);

// Map
// Creating an empty Map
let map = new Map();
console.log(map);

// Creating an Map from array
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
map = new Map(countries);
console.log(map);
console.log(map.size);

// Adding values to the Map
const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap);
console.log(countriesMap.size);

// Getting a value from Map
console.log(countriesMap.get("Finland"));

// Checking key in Map
console.log(countriesMap.has("Finland"));

// Getting all values from map using loop
for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}
