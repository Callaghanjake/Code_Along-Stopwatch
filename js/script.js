let secondsElapsed = 0;
let interval = null;
let time = document.querySelector('.time');
let startBtn = document.querySelector('.startBtn');

function leadZero(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    let minutes = Math.floor(secondsElapsed / 60);
    let seconds = secondsElapsed % 60;
    time.textContent = `${leadZero(minutes)}:${leadZero(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime();
}

function startClock () {
    if (interval) {resetClock()};
    interval = setInterval(timer, 1000);

}

startBtn.addEventListener('click', () => {
    startClock();
});

function stopClock () {
    clearInterval(interval);
}

function resetClock () {
    stopClock();
    secondsElapsed = 0;
    setTime();
}