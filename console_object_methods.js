// console.log()
// We use console.log() to show output on the browser console. We can substitute values and also we can style the logging out put using %c.

// Showing output on browser console

console.log('100 Days of Code')

// Substitution
console.log('%d %s of Code', 100, 'Days')

// CSS

console.log('%c100 Days Of Code', 'color:green') // log output is green
console.log(
  '%c100%c %cDays%c %cOf%c %cCode%c',
  'color:blue',
  '',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow',
  ''
) // log output green red and yellow text

// console.warn()
// We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices. Copy the following code and paste it on browser console to see warning messages.
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

// console.error()
// The console.error() methods shows an error messages.
console.error('This is an error message')
console.error('We all make mistakes')

// console.table()
// The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

// Let us first start with a simple array. The code below displays a table with two columns. An index column to display the index and value column to display the names

let names = ['Sarvesh', 'Agrawal', 'David', 'John']
console.table(names)

let user = {
    name: 'Sarvesh',
    title: 'Programmer',
    country: 'India',
    city: 'Bangalore',
    age: 23
  }
console.table(user)

let countries = [
    ['Karnataka', 'Bangalore'],
    ['Chhattisgarh', 'Bhilai'],
    ['TamilNadu', 'Coimbatore']
  ]
console.table(countries)

users = [
    {
      name: 'Sarvesh',
      title: 'Programmer',
      country: 'India',
      city: 'Bangalore',
      age: 23
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
console.table(users)

// console.time()
// Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

countries = [
    ['Karnataka', 'Bangalore'],
    ['Chhattisgarh', 'Bhilai'],
    ['TamilNadu', 'Coimbatore']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')


// console.info()
console.info('30 Days Of Code challenge is trending on Github')
console.info('30 Days Of ML challenge might be released')
console.info('30 Days Of DL challenge might be released')

console.log("++++++++++++++++++++++++++++++++++++++++++")
// console.assert()
// The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

// console.group()
// The console.group() can help to group different log groups. Copy the following code and paste it on browser console to the groups.
names = ['Asabeneh', 'Brook', 'David', 'John']
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.table(users)
console.groupEnd()

// console.count()
// It prints the number of time this console.count() is called. It takes a string label parameter. It is very helpful to count the number of times a function is called. In the following example, the console.count() method will run three times
const func = () => {
    console.count('Function has been called')
  }
func()
func()
func()

// console.clear()
// The console.clear() cleans the browser console.
console.clear()