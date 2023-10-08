document.addEventListener('DOMContentLoaded', function () {
    // Find the button element by its class
    var btnToggle = document.querySelector(".btn-toggle");

    // Find the light and dark mode stylesheets by their IDs
    var lightModeCSS = document.getElementById("resume-light");
    var darkModeCSS = document.getElementById("resume-dark");

    // Initialize the counter
    var clickCount = 0;

    // Initialize the mode preference, defaulting to dark mode (0)
    var modePreference = localStorage.getItem("modePreference") || 0;

    // Function to toggle between light and dark mode
    function toggleMode() {
        if (lightModeCSS.disabled) {
            // Enable light mode
            lightModeCSS.removeAttribute('disabled');
            darkModeCSS.setAttribute('disabled', 'true');
            modePreference = 1; // Set modePreference to 1 for light mode
        } else {
            // Enable dark mode
            darkModeCSS.removeAttribute('disabled');
            lightModeCSS.setAttribute('disabled', 'true');
            modePreference = 0; // Set modePreference to 0 for dark mode
        }

        // Store the user's preference for mode
        localStorage.setItem("modePreference", modePreference);

        // Increment the counter and print it to the console
        clickCount++;
        console.log("Button clicked " + clickCount + " times");
    }

    // Set the initial mode based on the user's preference
    if (modePreference === "1") {
        lightModeCSS.removeAttribute('disabled');
        darkModeCSS.setAttribute('disabled', 'true');
    } else {
        lightModeCSS.setAttribute('disabled', 'true');
        darkModeCSS.removeAttribute('disabled');
    }

    // Add a click event listener to the button
    btnToggle.addEventListener("click", toggleMode);
});
