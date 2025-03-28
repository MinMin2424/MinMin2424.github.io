const playPauseButton = document.getElementById('play-pause-button');
const bigButton = document.getElementById('big-button');
const smallButton = document.getElementById('small-button');
const normalButton = document.getElementById('normal-button');
const video = document.getElementById('video');

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
})

bigButton.addEventListener('click', () => {
    video.style.width = "100%";
})

smallButton.addEventListener('click', () => {
    video.style.width = "80%";
})

normalButton.addEventListener('click', () => {
    video.style.width = "90%";
})