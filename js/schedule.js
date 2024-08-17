// script.js

// Select all buttons with the class 'schedule-item'
const buttons = document.querySelectorAll('.schedule-item');

// Get the audio element
const hoverMusic = document.getElementById('hoverMusic');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hoverMusic.play(); // Play music when hovering over a button
    });

    button.addEventListener('mouseleave', () => {
        hoverMusic.pause(); // Pause music when no longer hovering
        hoverMusic.currentTime = 0; // Reset playback to start
    });
});
