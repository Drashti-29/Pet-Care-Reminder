// manage_pet.js

// Function to delete a pet
function deletePet(index) {
    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    pets.splice(index, 1); // Remove the pet at the specified index
    localStorage.setItem('pets', JSON.stringify(pets)); // Save updated pet list back to localStorage
    displayPets(); // Refresh the pet list
}

// Function to display pets
function displayPets() {
    const petList = document.getElementById('petList');
    if (!petList) {
        console.error('Element with ID "petList" not found.');
        return;
    }

    const pets = JSON.parse(localStorage.getItem('pets')) || [];

    petList.innerHTML = ''; // Clear existing pets

    if (pets.length === 0) {
        petList.innerHTML = '<p>No pets added yet.</p>';
    } else {
        pets.forEach((pet, index) => {
            const petDiv = document.createElement('div');
            petDiv.classList.add('pet-item');

            petDiv.innerHTML = `
                <h3>Pet ${index + 1}</h3>
                <p><strong>Name:</strong> ${pet.petName}</p>
                <p><strong>Type:</strong> ${pet.petType}</p>
                <p><strong>Breed:</strong> ${pet.breed}</p>
                <p><strong>Age:</strong> ${pet.age}</p>
                <p><strong>Weight:</strong> ${pet.weight}</p>
                <p><strong>Height:</strong> ${pet.height}</p>
                <p><strong>Color:</strong> ${pet.color}</p>
                <p><strong>Sex:</strong> ${pet.sex}</p>
                <button onclick="deletePet(${index})">Delete Pet</button>
            `;

            petList.appendChild(petDiv);
        });
    }
}

// Load and display pets on page load
document.addEventListener('DOMContentLoaded', function() {
    displayPets();
});
