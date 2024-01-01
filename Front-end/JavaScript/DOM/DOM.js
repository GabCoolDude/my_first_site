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

// Manipulating the DOM (UI)

const ul = document.querySelector(".items");

// ul.remove(); as the name implies removes elements
//ul.lastElementChild.remove(); remove the last element
ul.firstElementChild.textContent = "Hello"; // changes the first element to "Hello"
ul.children[1]; // selects 2nd element (since children is a NodeList, you can use index (this thing : [...]))
ul.children[1].innerText = "Gab"; // innerText is another way of changing the text of an element
ul.lastElementChild.innerHTML = "<h1>Hi, how ya doing ?</h1>"; // you can use innerHTML to write HTML in JS

const btn = document.querySelector(".btn");
btn.style.background = "red"; /* This is basically CSS in JS.
For example, this can be used to modify the color of a button when it is pressed*/
