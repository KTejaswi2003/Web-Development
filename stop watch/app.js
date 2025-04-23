let elapsedTime = 0;
let interval;

function startStopwatch() {
    const timerDisplay = document.getElementById('time');

    interval = setInterval(() => {
        elapsedTime++;

        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;

        timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(interval);
    interval = null;
}

function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    document.getElementById('time').textContent = '00:00:00';
}

document.getElementById('startButton').addEventListener('click', () => {
    if (!interval) {
        startStopwatch();
    }
});

document.getElementById('stopButton').addEventListener('click', stopStopwatch);
document.getElementById('resetButton').addEventListener('click', resetStopwatch);