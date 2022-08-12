const days = document.getElementById('days'),
  hours = document.getElementById('hours'),
  minutes = document.getElementById('minutes'),
  seconds = document.getElementById('seconds'),
  countdown = document.getElementById('countdown'),
  year = document.getElementById('year'),
  loading = document.getElementById('loading');

//current year
const currentYear = new Date().getFullYear();

//upcoming year, dynamic
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

/*the date of the upcoming newyear, hard coded
const newYearTime = new Date('January 01 2023 00:00:00');*/

//Set the background year
year.innerText = currentYear + 1;

//countdown
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  //add days, etc. to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

//show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1200);

//run countdown every second
setInterval(updateCountdown, 1000);

/*
- Create landing page with HTML/CSS x
- Calculate the days, hours, mins and seconds to the new year x
- Insert values into the DOM x
- Show a spinner right before loading the countdown, made it slower x
- Show the coming year in the background x
*/
