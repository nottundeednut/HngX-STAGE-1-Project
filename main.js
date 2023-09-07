const now = new Date();
const day = now.getDay(); 
const hours = now.getHours();
const minutes = now.getMinutes();

const utcHours = hours + 1;
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayEl = document.querySelector('#day');
const timeEl = document.querySelector('#time');

const currentTime = minutes < 10 ? `${utcHours} : 0${minutes}` : `${utcHours} : ${minutes}`

dayEl.innerHTML = weekDays[day];
timeEl.innerHTML = currentTime;
