/* Few important things : with JS, you will want to use the dev tools of your browser,
press F12 on google for dev tools, then click on console (this is basically the only tool used )

Use MDN (mozilla developer network) for JS documentation :
https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

// single line comment

/*multi
line
comment
*/

console.log("Hi"); //puts "Hi" in the browser console
console.error("This is an error"); // creates an error message in the console
console.warn("This is a warning"); // creates a warn message in the console

/* these are the 3 variable : var, let ,const,
var is no longer recommended, because if 2 vars have the same name there will be a conflict
"let" lets you change the value of the variable after you originally set it
"const" is short for constant, it cannot be changed 

it is recommended to always use const, unless you know you need to change the value, then use let*/

let age = 30;
age = 31;

console.log(age);

/*
const age = 32
age = 33

console.log(age);  this would throw an error*/

/* Data types do not need to be explicit in JS, this means you do not need to specify them
Here is a list of all data types : String, Numbers, Boolean, null, undefined
String : used for text
Numbers : used for numbers
Boolean : true or false 
null : empty variables
undefined : variable with no value*/

const first_name = "John";
const myAge = 22;
const rating = 3.5; // this will also be in the the numbers data type
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof first_name);
console.log(typeof myAge);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x); // there is a bug since the first version of JS where null will return object instead of null
console.log(typeof y);
console.log(typeof z);

// Concatenation
console.log("My name is " + first_name + " and I am " + myAge + " years old"); // old and annoying method
// new and awesome way of concatenating
console.log(`My name is ${first_name} and I am ${myAge} years old`); // make to use back quotes otherwise not work

// String methods
const s = "Hello world";

console.log(s.length); // logs the length of the string
console.log(s.toUpperCase()); // puts all the contents of the string to upper case
console.log(s.toLowerCase()); // puts all the contents of the string to lower case
console.log(s.substring(0, 5)); //logs only the specified letters (0 being the first letter AND NOT 1)
console.log(s.substring(0, 5).toUpperCase()); // you can stack these
console.log(s.split("")); // splits every letter into one array

const tags = "technology, computer, coding, tutorial";
console.log(tags.split(","));

/* Arrays : variables that hold multiples values
Array documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */

const numbers = new Array("1,2,3,4,5"); // old way
console.log(numbers);
const fruits = ["apples, bananas, lemons"]; // new way
console.log(fruits);

const array = ["apple", 10, true]; // you can have multiple data types in an array
console.log(array[0]); // you can print only 1 element of an array by typing in a number, the numbers start at 0 and not 1

const names = ["John", "Gab", "Doe"];
names.push("Isaac"); // adds "grapes" to the end of the array "names"
names.unshift("Mary"); // adds "mangos" to the end of the array "names"
console.log(names);

//names.pop(); removes the last variable of an array

// console.log(Array.isArray(names)) checks if something is an array, in this case yes
// console.log(Array.isArray("John Doe")) checks if something is an array, in this case no

console.log(names.indexOf("Gab")); // prints where a variable of an array is

// Object literals
const person = {
  first_name: "Mike",
  last_name: "Cox",
  age: 21,
  hobbies: ["music", "video games", "coding"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person); // "prints" the whole object
console.log(person.address.street); // "prints" only the street name
console.log(person.first_name, person.last_name); // you can "print" multiple at a time
console.log(person.hobbies[1]); // you can "print" an element of an array

const { last_name } = person; // "pulls out" of an object the last name variable
console.log(last_name); // and then prints it

const {
  address: { city },
} = person; // "pulls out" of an object the city variable
console.log(city); // and then prints it

person.email = "mikecox@gmail.com"; // you can add properties to an object
console.log(person);
