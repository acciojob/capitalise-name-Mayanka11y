//your JS code here. If required.
// Get the input element by its id
const inputField = document.getElementById("fname");

// Add an event listener for the 'blur' event
inputField.addEventListener("blur", function() {
    // Convert the input value to uppercase
    inputField.value = inputField.value.toUpperCase();
});