document.addEventListener("DOMContentLoaded", function() {
    // Select the "About Me" section
    const aboutSection = document.getElementById("about");

    // Create a new paragraph element
    const paragraph = document.createElement("p");

    // Set the text content of the paragraph
    paragraph.textContent = "I am a passionate student learning web development.";

    // Append the paragraph to the "About Me" section
    aboutSection.appendChild(paragraph);

    // Example of more involved functionality: Interactive Widget
    // For demonstration purposes, let's create a button that changes the background color of the page when clicked

    // Select the body element
    const body = document.body;

    // Create a button element
    const button = document.createElement("button");

    // Set the text content of the button
    button.textContent = "Change Background Color";

    // Append the button to the body
    body.appendChild(button);

    // Function to change the background color
    function changeBackgroundColor() {
        // Generate a random color
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        // Set the background color of the body
        body.style.backgroundColor = randomColor;
    }

    // Add event listener to the button
    button.addEventListener("click", changeBackgroundColor);
});