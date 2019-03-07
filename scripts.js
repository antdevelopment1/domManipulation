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

const tagline = document.querySelector('.tagline');
const newText = tagline.textContent.replace('$15', '$12');
tagline.textContent = newText;
console.log(tagline)

// Returns the first one only
let card = document.querySelector('.card');
console.log(card)
heading = document.querySelector('h2');
console.log(heading)

// Nested selectors with Css syntax
let image = document.querySelector('.card img');
console.log(image)

// Query Selector using nth-child, first-chil, last-child
link = document.querySelector('#primary a');
link = document.querySelector('#primary a:first-child');
link = document.querySelector('#primary a:last-child');
link = document.querySelector('#primary a:nth-child(2');
console.log(link);
