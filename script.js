// script.js

let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to start the stopwatch
function startStopwatch() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// Function to stop the stopwatch
function stopStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Function to reset the stopwatch
function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimerDisplay();
}

// Function to update the timer every second
function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateTimerDisplay();
}

// Function to update the timer display
function updateTimerDisplay() {
  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("timer").innerText = formattedTime;
}

// Function to pad single-digit numbers with leading zero
function pad(value) {
  return value < 10 ? "0" + value : value;
}
