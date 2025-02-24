// script.js

// Function for the "Alert Me" button
function alertMe() {
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Hi ${name}!`);
    } else {
        alert('Please enter your name.');
    }
}

// Function for the "Change Color" button
let currentColor = 'blue'; // Initial color is blue
function changeColor() {
    if (currentColor === 'blue') {
        document.body.style.backgroundColor = 'green';
        currentColor = 'green';
    } else {
        document.body.style.backgroundColor = 'blue';
        currentColor = 'blue';
    }
}

// Function for the "Validate Text" button
function validateText() {
    const textInput = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(textInput)) {
        alert('Text contains special characters!');
    } else {
        alert('Text is valid.');
    }
}

// Function for the "Add Text" button
function addText() {
    const pageHeading = document.getElementById('pageHeading');
    pageHeading.textContent += ' - Add Text';
}
