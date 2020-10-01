// Destructuring and Spread

// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

let numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

let names = ["Sarvesh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

let scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);

let fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

numbers = [1, 2, 3];
[numOne, , numThree] = numbers; //2 is omitted

console.log(numOne, numThree);

names = [undefined, "Brook", "David"]
// 
[
  ((firstPerson = "Asabeneh"),
  secondPerson,
  thirdPerson,
  (fourthPerson = "John"))
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)


// Destructuring during iteration
let countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
  console.log(country, city)
}

fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack) {
  console.log(first, second, third)
}

for(const [first, second, ...rest] of fullStack) {
  console.log(first, second, rest)
}

// Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.

let rectangle = {
  width: 20,
  height: 10,
  area: 200
}
// let { width, height, area, perimeter } = rectangle

// console.log(width, height, area, perimeter)


// Renaming during structuring
rectangle = {
  width: 20,
  height: 10,
  area: 200
}
// let { width: w, height: h, area: a, perimeter: p } = rectangle

// console.log(w, h, a, p)


// If the key is not found in the object the variable will be assigned to undefined. In case, the key is not in the object we can give a default value during declaration. See the example.
rectangle = {
  width: 20,
  height: 10,
  area: 200
}
// let { width, height, area, perimeter = 60 } = rectangle
// console.log(width, height, area, perimeter) //20 10 200 60

//Lets modify the object:width to 30 and perimeter to 80
rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80
}
// let { width, height, area, perimeter = 60 } = rectangle
// console.log(width, height, area, perimeter) //20 10 200 80


// Object parameter without destructuring

// Without destructuring
let rect = {
  width: 20,
  height: 10
}
let calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60

//with destructuring
//Another Example
const person = {
  firstName: 'Sarvesh',
  lastName: 'Agrawal',
  age: 23,
  country: 'India',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Hindi', 'English', 'Suomi(Finnish)']
}
// Lets create a function which give information about the person object without destructuring

let getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))


// Object parameter with destructuring
calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter(rect)) // 60

getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ')
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo(person))


// Destructuring object during iteration
let todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]
  
  for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
  }




// Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread arr elements to another array.


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
  
console.log(num1, num2, num3)
console.log(rest)

countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)


// Spread operator to copy array
let evens = [0, 2, 4, 6, 8, 10]
let evenNumbers = [...evens]

let odds = [1, 3, 5, 7, 9]
let oddNumbers = [...odds]

let wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)


// Spread operator to copy object
let user = {
  name:'Sarvesh',
  title:'Programmer',
  country:'India',
  city:'Bangalore'
}

let copiedUser = {...user}
console.log(copiedUser)


user = {
  name:'Sarvesh',
  title:'Programmer',
  country:'India',
  city:'Bangalore'
}

copiedUser = {...user, title:'instructor'}
console.log(copiedUser)



// Spread operator with arrow function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array

let sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)
sumAllNums(1, 2, 3, 4, 5, 6, 7)

sumAllNums = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
  
}

console.log(sumAllNums(1, 2, 3, 4, 5))
console.log(sumAllNums(1, 2, 3, 4, 5, 6, 7))