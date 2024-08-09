import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import $ from 'jquery';

// Array of predefined GIF search terms
var ranArray = ["Lana Del Rey", "Dogs", "Birds", "Snow", "Ice Cream"];

$(document).ready(function () {
    for (var i = 0; i < ranArray.length; i++) {
        $("#rando-buttons").append("<button type='button' onclick='searchGif(\"" + ranArray[i] + "\")' class='btn btn-primary' value=' "
            + ranArray[i] + "'> " + ranArray[i] + " </button>");
    }

    $("#rando-input").on("keypress", function(event) {
        if (event.which === 13) { 
            event.preventDefault(); 
            submitButtonClicked(); 
        }
    });
});



// Function to handle form submission
function submitButtonClicked() {
    // Trim input
    var userInput = $('#rando-input').val().trim(); 

    // Check for non-empty input
    if (userInput !== "") { 
        // Search for GIFs
        searchGif(userInput);  

        // Clear the input field 
        $('#rando-input').val(''); 
    }
}

// Function to perform AJAX request to search for GIFs
function searchGif(gifName) {
    const searchUrl = '/api/search?q=' + encodeURIComponent(gifName) + '&limit=20';
    
    $.ajax({
        // Request URL with user input
        url: searchUrl,
        // GET method for retrieving data
        type: 'GET',
    })
    .done(function (response) {
        // Display GIFs if request is successful
        displayGif(response);
    })
    .fail(function () {
        // If request fails show error message to user
        $('#random').html('<p class="text-danger">Error fetching GIFs. Please try again later.</p>'); // Show error message to user
    });
}

// Function to display GIFs on the page
function displayGif(response) {
    // Clear any existing GIFs
    $('#random').empty();

    // Limit to 20 GIFs
    const gifs = response.data.slice(0,20);
    for (var i = 0; i < gifs.length; i++) {
        // Get URLs for WebP and GIF formats
        const gifUrl = gifs[i].images.fixed_height.url;
        const webpUrl = gifs[i].images.fixed_height_webp ? gifs[i].images.fixed_height_webp.url : gifUrl;
        const stillUrl = gifs[i].images.fixed_height_still.url;
        const webpStillUrl = gifs[i].images.fixed_height_still_webp ? gifs[i].images.fixed_height_still_webp.url : stillUrl;

        // Create image element with descriptive alt text
        var image = '<img src="' + webpStillUrl +
            '" alt="' + gifs[i].title + '" ' +
            'data-still="' + webpStillUrl +
            '" data-animate="' + webpUrl +
            '" data-state="still" class="movImage" style="width: 200px; height: 200px;"';

        var image = '<div class="col-12 col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-center">' + image + '</div>';

        $('#random').append(image);
    }

    $('.movImage').on('click', function () {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }
    });
}

// Expose functions to global scope
window.searchGif = searchGif;
window.submitButtonClicked = submitButtonClicked;
