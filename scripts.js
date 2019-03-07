// let element;

// element = document;
// element = document.all;
// element = document.all[200];
// element = document.head;
// element = document.body;
// element = document.domain;
// element = document.URL;
// element = document.characterSet;
// element = document.contentType;

// // Links
// element = document.links;
// element = document.links[2];
// element = document.links[2].id;
// element = document.links[2].className;
// element = document.links[2].classList;

// // Forms
// element = document.forms;
// element = document.forms[0];
// element = document.forms[0].id;
// element = document.forms[0].method;
// element = document.forms[0].action;
// element = document.forms[0].classList;
// element = document.forms[0].className;
// element = document.forms[0].classList[0];

// // Inputs
// element = document.images;

// // Scripts
// element = document.scripts;
// element = document.scripts[0].getAttribute('src');

// // Looping the images
// let images = document.images;
// let imagesArray = Array.from(images);

// imagesArray.forEach((image) => {
//     console.log(image.src);
// })

// console.log(imagesArray)

// Selecting DOM Elements
let heading = document.getElementById('heading');
console.log(heading.textContent);

heading.style.background = '#333';
heading.style.color = '#fff';
heading.style.padding = "20px";
heading.style.marginTop = '50px';
heading.style.backgroundColor = 'teal';

// Change the text
heading.textContent = "The best courses!";
heading.innerText = 'New heading';

// Query Selector
const learningHeading = document.querySelector('#learn');
learningHeading.textContent = 'A new heading';

console.log(learningHeading)