/**
 * Video Player Control System
 * 
 * Provides interactive controls for video playback and sizing:
 * - Play/pause functionality
 * - Dynamic video resizing
 */
$(document).ready(function() {
    const $playPauseButton = $('#play-pause-button');
    const $bigButton = $('#big-button');
    const $smallButton = $('#small-button');
    const $normalButton = $('#normal-button');
    const $video = $('#video');
    const $videoElement = $video.get(0);

    /** Play/pause toggle functionality */
    $playPauseButton.click(function() {
        if($videoElement.paused) {
            $videoElement.play();
        } else {
            $videoElement.pause();
        }
    });

    /** Video sizing controls */
    $bigButton.click(function() {
        $video.css('width', '100%');
    });

    $smallButton.click(function() {
        $video.css('width', '80%');
    });

    $normalButton.click(function() {
        $video.css('width', '90%');
    });
});

// const playPauseButton = document.getElementById('play-pause-button');
// const bigButton = document.getElementById('big-button');
// const smallButton = document.getElementById('small-button');
// const normalButton = document.getElementById('normal-button');
// const video = document.getElementById('video');

// playPauseButton.addEventListener('click', () => {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// })

// bigButton.addEventListener('click', () => {
//     video.style.width = "100%";
// })

// smallButton.addEventListener('click', () => {
//     video.style.width = "80%";
// })

// normalButton.addEventListener('click', () => {
//     video.style.width = "90%";
// })