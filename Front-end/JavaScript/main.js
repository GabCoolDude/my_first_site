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
