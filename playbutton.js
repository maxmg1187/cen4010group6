// Get references to the button and container
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');
const container = document.getElementById('header');
const audio = new Audio();
const chatBox = document.querySelector('.chatGPT');

 // Array of image and song URLs
 const imageAndSong = [
    { image: 'images/spring.jpg', audio: 'audio/spring.mp3' },
    { image: 'images/summer.jpg', audio: 'audio/summer.mp3' },
    { image: 'images/autumn.jpg', audio: 'audio/autumn.mp3' },
    { image: 'images/winter.jpg', audio: 'audio/winter.mp3' }
];


// Add a click event listener to the button
playButton.addEventListener('click', changeBackgroundAndAudio);

// Function to change the background image and song
function changeBackgroundAndAudio(){
// Select a random index
const randomIndex = Math.floor(Math.random() * imageAndSong.length);
const random = imageAndSong[randomIndex];

// Set the background image
container.style.backgroundImage = `url(${random.image})`;

// Set the audio source and play the audio
audio.src = random.audio;
audio.loop = true;
audio.play();

// Set mute button and input + output chat box for chatGPT to display, while the play button disappear 
muteButton.style.display = 'flex';
playButton.style.display = 'none';
chatBox.style.display = 'flex';
}

/* Switches the audio between mute and unmute on click*/
muteButton.addEventListener('click', toggleMute);

function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
        muteButton.classList.remove('fa-volume-mute');
        muteButton.classList.add('fa-volume-up');
      } else {
        audio.muted = true;
        muteButton.classList.remove('fa-volume-up');
        muteButton.classList.add('fa-volume-mute');
    }
}