// volunteers.js

let volunteers = []; // Array to store volunteer names

// Function to add a volunteer to the list
function addVolunteer() {
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();

    if (firstName && lastName) {
        const fullName = `${firstName} ${lastName}`;
        volunteers.push(fullName);
        displayVolunteers();
        clearInputFields();
    } else {
        alert('Please enter both first name and last name.');
    }
}

// Function to delete a volunteer from the list
function deleteVolunteer() {
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();

    if (firstName && lastName) {
        const fullName = `${firstName} ${lastName}`;
        const index = volunteers.indexOf(fullName);

        if (index !== -1) {
            volunteers.splice(index, 1);
            displayVolunteers();
            clearInputFields();
        } else {
            alert('Volunteer not found.');
        }
    } else {
        alert('Please enter both first name and last name.');
    }
}

// Function to display the list of volunteers with a running count
function displayVolunteers() {
    const volunteerList = document.getElementById('volunteerList');
    volunteerList.value = volunteers.map((volunteer, index) => `${index + 1}. ${volunteer}`).join('\n');
}

// Function to clear the input fields
function clearInputFields() {
    document.getElementById('first_name').value = '';
    document.getElementById('last_name').value = '';
}

// Function to clear the entire volunteer list
function clearVolunteers() {
    volunteers = [];
    displayVolunteers();
}

// Function to sort volunteers by first name
function sortVolunteers() {
    volunteers.sort((a, b) => a.localeCompare(b));
    displayVolunteers();
}

// Adding event listeners to buttons
document.getElementById('add_button').addEventListener('click', addVolunteer);
document.getElementById('delete_button').addEventListener('click', deleteVolunteer);
document.getElementById('clear_button').addEventListener('click', clearVolunteers);
document.getElementById('sort_button').addEventListener('click', sortVolunteers);
