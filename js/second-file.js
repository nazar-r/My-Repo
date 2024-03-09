const clockElement = document.querySelector('.products__clock');
const updateClock = () => { clockElement.innerText = new Date().toLocaleTimeString('uk'); };
setInterval(updateClock, 1000);
updateClock();