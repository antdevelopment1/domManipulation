const firstParagraph = document.getElementsByTagName('p');

for (let i = 0; i < firstParagraph.length; i++) {
    firstParagraph[i].innerHTML = 'Oh what fun';
}
console.log(firstParagraph)

for (let p of firstParagraph) {
    p.innerHTML = "holy buns";
}