// Regular Expressions

// Creating a pattern with RegExp Constructor

// without flag
let pattern = "love";
let regEx = new RegExp(pattern);

// with flag
pattern = "love";
let flag = "gi";
regEx = new RegExp(pattern, flag);

regEx = new RegExp("love", "gi");

// Creating a pattern without RegExp Constructor
regEx = /love/gi;

// RegExp Object Methods
// Testing for a match
// test():Tests for a match in a string. It returns true or false.

let str = "I love JavaScript";
pattern = /love/;
let result = pattern.test(str);
console.log(result);

// Array containing all of the match

// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found.
// If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

str = "I love JavaScript";
pattern = /love/;
result = str.match(pattern);
console.log(result);


// Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. 
// If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

str = 'I love JavaScript'
pattern = /love/
result = str.match(pattern)
console.log(result)

str = 'I love JavaScript'
pattern = /love/g
result = str.match(pattern)
console.log(result)

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

str = 'I love JavaScript'
pattern = /love/g
result = str.search(pattern)
console.log(result)


// Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.


let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)


txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)

txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)


txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)  


// Square Bracket
// Let's use square bracket to include lower and upper case

pattern = '[Aa]pple' // this square bracket mean either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
matches = txt.match(pattern)

console.log(matches)  


pattern = /[Aa]pple/g // this square bracket mean either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
matches = txt.match(pattern)

console.log(matches)  

pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
matches = txt.match(pattern)

console.log(matches)  

// Escape character(\) in RegExp
pattern = /\d/g  // d is a special character which means digits
txt = 'This regular expression example was made in January 12,  2020.'
matches = txt.match(pattern)

console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want


// One or more times(+)
pattern = /\d+/g  // d is a special character which means digits
txt = 'This regular expression example was made in January 12,  2020.'
matches = txt. match(pattern)

console.log(matches)  // ["12", "2020"]

// Period(.)

pattern = /[a]./g  // this square bracket means a and . means any character except new line
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]
pattern = /[a].+/g  // . any character, + any character one or more times 
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

// Zero or more times(*)
// Zero or many times. The pattern could may not occur or it can occur many times.

pattern = /[a].*/g  //. any character, + any character one or more times 
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

// Zero or one times(?)
// Zero or one times. The pattern could may not occur or it may occur once.

txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

// Quantifier in RegExp
// We can specify the length of the substring we look for in a text, using a curly bracket. Lets imagine, we are interested in substring that their length are 4 characters
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\d{4}/g  // exactly four times
matches = txt.match(pattern)
console.log(matches)  // ['2019']

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\d{1,4}/g   // 1 to 4
matches = txt.match(pattern)
console.log(matches)  // ['6', '2019']

// Cart ^

// Starts with
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /^This/ // ^ means starts with
matches = txt.match(pattern)
console.log(matches)  // ['This']

// Negation
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no coma no period
matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]


// Exact match
// It should have ^ starting and $ which is an end.

pattern = /^[A-Z][a-z]{3,12}$/;
name = 'Sarvesh';
result = pattern.test(name)

console.log(result) // true