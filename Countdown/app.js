// Function to start the countdown
function startCountdown(durationInSeconds) {
  const timerInput = document.getElementById('timerInput');
  let remainingTime = durationInSeconds;

  const interval = setInterval(() => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    // Update the timer input display
    timerInput.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (remainingTime <= 0) {
      clearInterval(interval);
      timerInput.value = "Time's up!";
    }

    remainingTime--;
  }, 1000);
}

// Add event listener to the Start button
document.getElementById('startButton').addEventListener('click', () => {
  const timerInput = document.getElementById('timerInput');
  const timeParts = timerInput.value.split(':');

  if (timeParts.length === 3) {
    const hours = parseInt(timeParts[0], 10) || 0;
    const minutes = parseInt(timeParts[1], 10) || 0;
    const seconds = parseInt(timeParts[2], 10) || 0;

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds > 0) {
      startCountdown(totalSeconds);
    } else {
      alert("Please enter a valid time.");
    }
  } else {
    alert("Please enter the time in HH:MM:SS format.");
  }
});