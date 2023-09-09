function updateDay() {
  const dayEl = document.querySelector("#day");
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date().getDay();
  dayEl.innerHTML = weekDays[day];
}

function updateUtcTime() {
  const currentTime = new Date().getTime();
  const timeEl = document.querySelector("#time");
  timeEl.innerHTML = currentTime;
}

updateDay();
setInterval(updateUtcTime, 1000);
