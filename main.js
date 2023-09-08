const now = new Date();
const day = now.getDay(); 
const utcInMilliSeconds = now.getUTCMilliseconds();

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayEl = document.querySelector('#day');
const timeEl = document.querySelector('#time');

const currentTime = utcInMilliSeconds;

dayEl.innerHTML = weekDays[day];
timeEl.innerHTML = currentTime;

