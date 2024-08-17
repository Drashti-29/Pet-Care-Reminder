document.getElementById('petType').addEventListener('change', function() {
    const petType = this.value;

    // Get audio elements
    const dogSound = document.getElementById('dogSound');
    const catSound = document.getElementById('catSound');
    const birdSound = document.getElementById('birdSound');
    const rabbitSound = document.getElementById('rabbitSound');
    const hamsterSound = document.getElementById('hamsterSound');
    const fishSound = document.getElementById('fishSound');

    // Pause all sounds first
    dogSound.pause();
    catSound.pause();
    birdSound.pause();
    rabbitSound.pause();
    hamsterSound.pause();
    fishSound.pause();

    // Reset current time of all sounds
    dogSound.currentTime = 0;
    catSound.currentTime = 0;
    birdSound.currentTime = 0;
    rabbitSound.currentTime = 0;
    hamsterSound.currentTime = 0;
    fishSound.currentTime = 0;

    // Play the corresponding sound based on the selected pet type
    if (petType === 'dog') {
        dogSound.play();
    } else if (petType === 'cat') {
        catSound.play();
    } else if (petType === 'bird') {
        birdSound.play();
    } else if (petType === 'rabbit') {
        rabbitSound.play();
    } else if (petType === 'hamster') {
        hamsterSound.play();
    } else if (petType === 'fish') {
        fishSound.play();
    }
});


document.getElementById('submit').addEventListener('click', function() {
    const name = document.getElementById('petName').value;
    const petType = document.getElementById('petType').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const color = document.getElementById('color').value;
    const sex = document.getElementById('sex').value;

    if (!name || !petType || !breed || !age || !weight || !height || !color || !sex) {
        alert('Please fill out all fields.');
        return;
    }

    const newPet = { petName: name, petType, breed, age, weight, height, color, sex };

    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    pets.push(newPet);
    localStorage.setItem('pets', JSON.stringify(pets));

    // Redirect to manage pets page
    window.location.href = 'manage_pets.html';
});
