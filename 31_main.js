const mainHeadingElement = document.querySelector("#mainHeading");
mainHeadingElement.style.color = 'Red';
const secHeadingElement = document.querySelector('#secondHeading');
secHeadingElement.style.color = 'skyblue';
const listElement = document.querySelector('.list');
const conElement = document.querySelector('#content');
listElement.removeChild(conElement);
const mainHeadingElements = document.querySelector('#mainHeading');
mainHeadingElements.addEventListener('mouseover', ()=>{
    mainHeadingElements.style.color = 'black';
    mainHeadingElements.style.fontSize = '30px';
} ); 