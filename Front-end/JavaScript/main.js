/* Few important things : with JS, you will want to use the dev tools of your browser,
press F12 on google for dev tools, then click on console (this is basically the only tool used )

Use MDN (mozilla developer network) for JS documentation :
https://developer.mozilla.org/en-US/docs/Web/JavaScript

also i followed this tutorial : https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s
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

// Arrays of objects
const TODOs = [
  {
    id: 1,
    text: "Do the dishes",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Take out the trash",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: true,
  },
];

console.log(TODOs);
console.log(TODOs[1]);

// JSON
const todoJSON = JSON.stringify(TODOs); // converts TODOs to JSON syntax so it's ready to send to server (if server uses json)

// For loops
for (
  let i = 0; //base
  i <= TODOs.length; // what we want to check
  i++ // the thing to get out of the loop
) {
  console.log(`For loop number : ${i}`);
}

// While loops
let i = 0;
while (i <= 5) {
  console.log(`While loop number : ${i}`);
  i++; // MAKE SURE TO HAVE A WAY TO GET OUT OF A WHILE LOOP OTHERWISE YOU WILL BE STUCK
}

// For of loops
for (let todo of TODOs) {
  console.log(todo.isCompleted);
}

/* High order array methods:
forEach: loops through the arrays
map: allows to create new arrays from an array
filter: create a new array based of a condition
*/
TODOs.forEach(function (todo) {
  console.log(todo.text);
});

const todoID = TODOs.map(function (todo) {
  return todo.id;
});
console.log(todoID);

/* this one may be a bit confusing but what we're doing is "looking" for something that is true 
and then printing the text of that something*/
const todoCompleted = TODOs.filter(function (todo) {
  return todo.isCompleted === true;
}).map(function (todo) {
  return todo.text;
});
console.log(todoCompleted);

// Conditions
const a = "15";
const b = "10";

if (a == 15) {
  /* == will ignore the data type so in this case its true*/
  console.log("a is 15");
}

if (a === 15) {
  /* === will NOT ignore the data type so in this case its false*/
  console.log("a is 15");
} else if (a > 5) {
  console.log("a is greater than 10");
} else {
  console.log("a is less than 10");
}

if (b > 5 || a > 20) {
  // "||" represents "or"
  console.log("b is more than 5 or a is more than 10");
}

if (b > 5 && a > 20) {
  // "&&" means "and"
  console.log("b is more than 5 and a is more than 10");
}
// Ternary operator ( shorthand if statement )
const c = 11;

const color = c > 10 ? "red" : "blue"; // if x is less than 10 then color = red, else color = blue
console.log(color);

// switch statements ( another way to check condition )

switch (color) {
  case "red": // if color is red
    console.log("color is red");
    break;
  case "blue": // if color is blue
    console.log("color is blue");
    break;
  default: // else
    console.log("color is nor blue or red");
    break;
}

// Functions
function addNums(num1 = 0, num2 = 0) {
  console.log(num1 + num2); // not recommended
}

addNums();
addNums(5, 4);

function addNumbers(num1 = 0, num2 = 0) {
  // if we didnt put num1 = 0, num2 = 0
  return num1 + num2; // recommended
}
console.log(addNumbers(5, 9));

// arrow functions

const addNumeros = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};
console.log(addNumeros(3, 5));

// OOP (Object Oriented Programming)

// This is a constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  /*this.getBirthYear = function () {
    return this.dob.getFullYear();
  }; this is not need anymore ( see line 285 )*/
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

/* prototype is useful to get rid of "objects" we might not use/need,
 they will not be attached with every instant of an object
 but we can still utilize them if necessary*/
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// we then need to instantiate an object
const person1 = new Person("John", "Doe", "1/1/1984");
const person2 = new Person("Gab", "Me", "2/2/1984");

console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person1.getFullName());
