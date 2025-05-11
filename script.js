function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Add transition effects
  document.getElementById('hours').style.transition = 'all 0.5s ease-in-out';
  document.getElementById('minutes').style.transition = 'all 0.5s ease-in-out';
  document.getElementById('seconds').style.transition = 'all 0.5s ease-in-out';

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateClock,1000);
