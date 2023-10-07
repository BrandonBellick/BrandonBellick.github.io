document.addEventListener("DOMContentLoaded", function () {
    // Find the button element by its class
    var btnToggle = document.querySelector(".btn-toggle");
    
    // Find the light and dark mode stylesheets by their IDs
    var lightModeCSS = document.getElementById("resume-light");
    var darkModeCSS = document.getElementById("dark-mode");

    // Initialize a counter
    var clickCount = 0;

    // Add a click event listener to the button
    btnToggle.addEventListener("click", () => {
        if (lightModeCSS.disabled) {
            // Enable light mode
            lightModeCSS.removeAttribute('disabled');
            darkModeCSS.setAttribute('disabled', 'true');
        } else {
            // Enable dark mode
            darkModeCSS.removeAttribute('disabled');
            lightModeCSS.setAttribute('disabled', 'true');
        }

        // Increment the counter and print it to the console
        clickCount++;
        console.log("Button clicked " + clickCount + " times");
    });
});
