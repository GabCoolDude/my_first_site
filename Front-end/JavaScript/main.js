/* Few important things : with JS, you will want to use the dev tools of your browser,
press F12 on google for dev tools, then click on console (this is basically the only tool used )

Use MDN (mozilla developer network) for JS documentation
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
// new and awesome way
console.log(`My name is ${first_name} and I am ${myAge} years old`); // make to use back quotes otherwise not work
