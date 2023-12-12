// script.js
let contacts = [];

function addContact() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    // Validate inputs
    if (!name || !email || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    // Add the contact to the array
    contacts.push({ name, email, phone });

    // Display the updated contacts list
    displayContacts();

    // Clear the form
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
}

function displayContacts() {
    const contactsList = document.getElementById('contactsList');
    contactsList.innerHTML = '';

    // Display contacts   
    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        contactDiv.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <button type="button" class="edit" onclick="editContact(${index})">Edit</button>
      <button type="button" class="delete" onclick="deleteContact(${index})">Delete</button>
    `;
        contactsList.appendChild(contactDiv);
    });

}

// script.js

function editContact(index) {
    // Get the contact at the specified index
    const contactToEdit = contacts[index];

    // Prompt the user for new details
    const newName = prompt('Enter new name:', contactToEdit.name);
    const newEmail = prompt('Enter new email:', contactToEdit.email);
    const newPhone = prompt('Enter new phone number:', contactToEdit.phone);

    // Validate inputs
    if (!newName || !newEmail || !newPhone) {
        alert('Please fill in all fields.');
        return;
    }

    // Update the contact details
    contacts[index] = {
        name: newName,
        email: newEmail,
        phone: newPhone,
    };

    // Display the updated contacts list
    displayContacts();
}


function deleteContact(index) {
    // Implement deletion logic
    contacts.splice(index, 1);
    displayContacts();
}

// Initial load
displayContacts();
