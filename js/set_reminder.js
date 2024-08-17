// Function to handle setting a reminder
document.getElementById('reminderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const activity = document.getElementById('activity').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const reminderType = document.getElementById('reminderType').value;
    const contact = document.getElementById('contact').value;
    const petName = document.getElementById('petName').value;

    if (!activity || !time || !date || !reminderType || !contact || !petName) {
        alert('Please fill out all fields.');
        return;
    }

    const newReminder = { activity, time, date, reminderType, contact, petName };

    let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.push(newReminder);
    localStorage.setItem('reminders', JSON.stringify(reminders));

    // Redirect to view reminders page
    window.location.href = 'view_reminder.html';
});
