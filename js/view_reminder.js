// Function to display reminders
function displayReminders() {
    const remindersList = document.getElementById('remindersList');
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];

    remindersList.innerHTML = ''; // Clear existing reminders

    if (reminders.length === 0) {
        remindersList.innerHTML = '<p>No reminders set yet.</p>';
    } else {
        reminders.forEach((reminder, index) => {
            const reminderDiv = document.createElement('div');
            reminderDiv.classList.add('reminder');

            reminderDiv.innerHTML = `
                <h3>Reminder ${index + 1}</h3>
                <p><strong>Activity:</strong> ${reminder.activity}</p>
                <p><strong>Time:</strong> ${reminder.time}</p>
                <p><strong>Date:</strong> ${reminder.date}</p>
                <p><strong>Reminder Type:</strong> ${reminder.reminderType}</p>
                <p><strong>Contact:</strong> ${reminder.contact}</p>
                <p><strong>Pet Name:</strong> ${reminder.petName}</p>
                <button onclick="deleteReminder(${index})">Delete Reminder</button>
            `;

            remindersList.appendChild(reminderDiv);
        });
    }
}

// Function to delete a reminder
function deleteReminder(index) {
    let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.splice(index, 1); // Remove the reminder at the specified index
    localStorage.setItem('reminders', JSON.stringify(reminders)); // Save updated reminders back to localStorage
    displayReminders(); // Refresh the reminder list
}

// Load and display reminders on page load
window.onload = displayReminders;
