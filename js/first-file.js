const heading = document.querySelector('.header__logo');
const greetings = [
'123', 
'456', 
'789',
];

const getRandom = (array) => array[Math.floor(Math.random() * array.length)]; 
heading.innerText =  getRandom(greetings)