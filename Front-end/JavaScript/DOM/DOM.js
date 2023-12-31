/* DOM is the Document Object Model it is used to take elements 
and put them in variables to be able to send them to the server */

console.log(window); // the window object is the parent object of the browser

// Single element selectors
console.log(document.getElementById("my-form")); // "grabs" an html element by its id
const form = document.getElementById("my-form"); // you can assign it to a variable

console.log(document.querySelector(".container")); // querySelector can grab anything : classes, ids, header, html elements, etc
console.log(document.querySelector("h1"));

// Multiple element selectors
console.log(document.querySelectorAll(".item"));
/*there are other older ways of getting elements like
document.getElementsByClassName("item")  this will do the same as above but will 
put it into an HTMLCollection which is worse because you cant use array methods on it

document.getElementsByTagName("li") this also puts it into an HTMLCollection

so most of the time, use querySelector*/

/*const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item));*/
