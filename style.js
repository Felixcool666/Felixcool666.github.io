// /*Notifications and Conditional*/
let submitButton = document.getElementById("submit");
if (submitButton) { // if the page contains the submit button (Prospects page)
    // add an event listener to the submit button
    submitButton.addEventListener("click", submitMessage);
}

// function to be called when the submit button is clicked
function submitMessage() {
    // read the values of the input fields
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let age = document.getElementById("age").value;

    // check if the user is old enough to register
    if (age < 18) {
        alert("You are too young, these are just difficult for you, wait a few years to learn.");
    } else {
        alert("Thank you for your understanding and interest in learning about the program" + FirstName + " " + LastName );
    }
}
// /*change color prospects.index */
let button = document.getElementById('change-color-btn');

// make sure the button exists
if (button) {
    button.addEventListener('click', change_color);
}

// function to change the background color
function change_color() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    document.body.style.backgroundColor = randomColor;
};
    

                