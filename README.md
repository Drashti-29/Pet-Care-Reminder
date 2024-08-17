# Pet Care Reminder App

## Overview
The Pet Care Reminder App assists pet owners in managing their pets' care routines by providing reminders for activities like feeding, grooming, vet appointments, and medication. The app allows users to add pet details, set reminders, and view reminders. It also includes sound effects that play based on the selected pet type and button interactions.

## Features
- **Add Pet Details**: Users can input details about their pets, including name, type, breed, age, weight, height, color, and sex.
- **Set Reminders**: Users can create reminders for pet care activities such as feeding, grooming, cleaning, vet visits, and medication.
- **View Reminders**: Users can view and manage their set reminders.
- **Sound Features**: The app plays specific sounds related to the selected pet type and button interactions.

## Sound Activation Note
If the sound does not play, please click anywhere on the window to activate the DOM (Document Object Model) for audio playback. This action is often required by browsers to enable audio features.

## Sound Effects
The app includes sound effects for different pet types and button interactions:

### Pet Type Sounds
- **Dog**: Plays a dog barking sound.
- **Cat**: Plays a cat meowing sound.
- **Bird**: Plays a bird chirping sound.
- **Rabbit**: Plays a rabbit squeaking sound.
- **Hamster**: Plays a hamster squeaking sound.
- **Fish**: Plays a water bubbling sound.

### Button Sounds
- **Start Button**: Plays a starting sound effect when clicked.
- **Schedule Button**: Plays a scheduling sound effect when clicked.

Audio files for each pet type and button interaction are included, and the corresponding sound is played based on the user’s actions.

## How to Use

### Add Pet Details
1. Navigate to `pet_details.html` page.
2. Complete the form with information about the pet.
3. Click "Next" to save the details and proceed to the scheduling page.

### Set Reminders
1. Go to the `set_reminder.html` page.
2. Select the pet type and enter the reminder details.
3. Choose an activity, time, date, reminder type, and contact.
4. Click "Set Reminder" to save the reminder.

### View Reminders
1. Access the `view_reminder.html` page to view and manage reminders.

### Interact with Buttons
- **Start Button**: Initiates the app or starts a specific action with a sound effect.
- **Schedule Button**: Opens the scheduling page with a sound effect.

## Technologies Used
- HTML
- CSS
- JavaScript

## File Structure
- `index.html`: Home page of the app.
- `pet_details.html`: Form for adding pet details.
- `set_reminder.html`: Form for setting pet care reminders.
- `view_reminder.html`: Page for viewing reminders.
- `manage_pets.html`: Page for managing the list of pets.
- `css/`: Directory with CSS files for styling the app.
- `js/`: Directory with JavaScript files for app functionality.
- `audio/`: Directory with sound files for pet types and button interactions.

## Future Improvements
- User authentication to manage multiple accounts.
- Integration with calendar APIs for improved reminder management.
- Enhanced UI/UX for a more engaging experience.

## Contributing
Contributions to the project are welcome. Submit pull requests or open issues for any questions or suggestions.
