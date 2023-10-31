// Get references to the button and container
const button = document.getElementById('playButton');
const container = document.getElementById('header');

 // Array of image URLs
 const images = [
    'images/spring.jpg',
    'images/summer.jpg',
    'images/autumn.jpg',
    'images/winter.jpg'
];

// Function to change the background image
function changeBackground() {
// Select a random index from the images array
const randomIndex = Math.floor(Math.random() * images.length);

// Get the random image URL
const randomImage = images[randomIndex];

// Set the background image
container.style.backgroundImage = `url(${randomImage})`;
}

// Add a click event listener to the button
button.addEventListener('click', changeBackground);