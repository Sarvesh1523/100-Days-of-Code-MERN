// Error Handling

// try {
//     // code that may throw an error
//   } catch (err) {
//     // code to be executed if an error occurs
//   } finally {
//     // code to be executed regardless of an error occurs or not
// }

// try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

// catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

// finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

try {
    let lastName = 'Agrawal'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
}

try {
    let lastName = 'Agrawal'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
        console.error(err) // we can use console.log() or console.error()
  } finally {
        console.log('In any case I will be executed')
  }

try {
    let lastName = 'Agrawal'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
} finally {
    console.log('In any case I will be executed')
}

// throw 'Error2' // generates an exception with a string value
// throw 42 // generates an exception with the value 42
// throw true // generates an exception with the value true
// throw new Error('Required') // generates an error object with the message of Required


const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
throwErrorExampleFun()

// Error Types
// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.

let firstName = 'Sarvesh'
let fullName = firstName + ' ' + lastName

console.log(fullName)

// SyntaxError: A syntax error has occurred
// let square = 2 x 2
// console.log(square)

// console.log('Hello, world")


// TypeError: A type error has occurred
let num = 10
console.log(num.toLowerCase())