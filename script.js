// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}


//fixed cat-heart and cat-flower
// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';

    // Get the container where the images will be displayed
    var imageContainer = document.getElementById('image-container');

    // Create new Image elements for the cat-heart and cat-flowers
    var catHeartImage = new Image();
    var catFlowersImage = new Image();

    // Set the sources for the images
    catHeartImage.src = 'cat-heart.gif';
    catFlowersImage.src = 'cat-flowers.gif';

    // Set alternative text for the images
    catHeartImage.alt = 'Cat Heart';
    catFlowersImage.alt = 'Cat Flowers';

    // When both images are fully loaded, add them to the image container
    var imagesLoaded = 0;

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === 2) {
            // Append images to the image container
            imageContainer.appendChild(catHeartImage);
            imageContainer.appendChild(catFlowersImage);

            // Add the text "Happy Woman Day, Mom"
            var textContainer = document.getElementById('text-container');
            var message = document.createElement('div');
            message.id = 'message';
            message.innerText = 'Happy Woman Day, Mom';
            textContainer.appendChild(message);

            // Hide the options container
            document.getElementById('options').style.display = 'none';
        }
    }

    catHeartImage.onload = imageLoaded;
    catFlowersImage.onload = imageLoaded;
}


// Display the cat.gif initially
displayCat();
