

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons by their IDs
    const patent1Button = document.getElementById("patent1Button");
    const patent2Button = document.getElementById("patent2Button");
    const patent3Button = document.getElementById("patent3Button");
    const patent4Button = document.getElementById("patent4Button");
    const patent5Button = document.getElementById("patent5Button");
    const patent6Button = document.getElementById("patent6Button");
    const patent7Button = document.getElementById("patent7Button");
    const patent8Button = document.getElementById("patent8Button");
    const patent9Button = document.getElementById("patent9Button");
    const f2c2Imgs = document.querySelector(".f2c2-imgs");
    
    const image1 = document.getElementById("image1");
    const image1a = document.getElementById("image1a");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");
    const image4 = document.getElementById("image4");
    const image5 = document.getElementById("image5");
    const image6 = document.getElementById("image6");
    const image7 = document.getElementById("image7");
    const image8 = document.getElementById("image8");
    const image9 = document.getElementById("image9");
    const image2a = document.getElementById("image2a");
    const image3a = document.getElementById("image3a");
    const image4a = document.getElementById("image4a");
    const image5a = document.getElementById("image5a");
    const image6a = document.getElementById("image6a");
    const image7a = document.getElementById("image7a");
    const image8a = document.getElementById("image8a");
    const image9a = document.getElementById("image9a");
    

    function toggleActiveButton(button) {
        const buttons = document.querySelectorAll('.patent-button');
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    patent1Button.addEventListener("click", () => {
        toggleActiveButton(patent1Button);
        if (image1.style.display === "none" || image1.style.display === "" && image1a.style.display === "none" || image1a.style.display === "") {
            image1.style.display = "flex";
            image1a.style.display = "flex";
            image2.style.display = "none"; // Hide the other image
            image3.style.display = "none";
            image4.style.display = "none"; // Hide the other image
            image5.style.display = "none";
            image6.style.display = "none"; // Hide the other image
            image7.style.display = "none";
            image8.style.display = "none"; // Hide the other image
            image9.style.display = "none";
            image2a.style.display="none";
            image3a.style.display="none";
            image4a.style.display="none";
            image5a.style.display="none";
            image6a.style.display="none";
            image7a.style.display="none";
            image8a.style.display="none";
            image9a.style.display="none";
        } else {
            image1.style.display = "none";
            image1a.style.display = "none";
        }
    });

    patent2Button.addEventListener("click", () => {
        toggleActiveButton(patent2Button);
        if (image2.style.display === "none" || image2.style.display === "") {
            image2.style.display = "flex";
            image2a.style.display ="flex";
            image1a.style.display = "none"
            image1.style.display = "none"; // Hide the other image
            image3.style.display = "none";
            image4.style.display = "none"; // Hide the other image
            image5.style.display = "none";
            image6.style.display = "none"; // Hide the other image
            image7.style.display = "none";
            image8.style.display = "none"; // Hide the other image
            image9.style.display = "none";
            image3a.style.display="none";
            image4a.style.display="none";
            image5a.style.display="none";
            image6a.style.display="none";
            image7a.style.display="none";
            image8a.style.display="none";
            image9a.style.display="none";
        } else {
            image2.style.display = "none";
            image2a.style.display="none";
        }
    });
// ... your existing code ...

patent3Button.addEventListener("click", () => {
    toggleActiveButton(patent3Button);
    if (image3.style.display === "none" || image3.style.display === "") {
        image3.style.display = "flex";
        image3a.style.display = "flex";
        image1.style.display = "none"; // Hide the other image
        image1a.style.display = "none";
        image2.style.display = "none"; // Hide the other image
        image2a.style.display = "none";
        image4.style.display = "none"; // Hide the other image
        image4a.style.display = "none";
        image5.style.display = "none"; // Hide the other image
        image5a.style.display = "none";
        image6.style.display = "none"; // Hide the other image
        image6a.style.display = "none";
        image7.style.display = "none"; // Hide the other image
        image7a.style.display = "none";
        image8.style.display = "none"; // Hide the other image
        image8a.style.display = "none";
        image9.style.display = "none"; // Hide the other image
        image9a.style.display = "none";
    } else {
        image3.style.display = "none";
        image3a.style.display = "none";
    }
});

patent4Button.addEventListener("click", () => {
    toggleActiveButton(patent4Button);
    if (image4.style.display === "none" || image4.style.display === "") {
        image4.style.display = "flex";
        image4a.style.display = "flex";
        image1.style.display = "none"; // Hide the other image
        image1a.style.display = "none";
        image2.style.display = "none"; // Hide the other image
        image2a.style.display = "none";
        image3.style.display = "none"; // Hide the other image
        image3a.style.display = "none";
        image5.style.display = "none"; // Hide the other image
        image5a.style.display = "none";
        image6.style.display = "none"; // Hide the other image
        image6a.style.display = "none";
        image7.style.display = "none"; // Hide the other image
        image7a.style.display = "none";
        image8.style.display = "none"; // Hide the other image
        image8a.style.display = "none";
        image9.style.display = "none"; // Hide the other image
        image9a.style.display = "none";
    } else {
        image4.style.display = "none";
        image4a.style.display = "none";
    }
});

patent5Button.addEventListener("click", () => {
    toggleActiveButton(patent5Button);
    if (image5.style.display === "none" || image5.style.display === "") {
        image5.style.display = "flex";
        image5a.style.display = "flex";
        image1.style.display = "none"; // Hide the other image
        image1a.style.display = "none";
        image2.style.display = "none"; // Hide the other image
        image2a.style.display = "none";
        image3.style.display = "none"; // Hide the other image
        image3a.style.display = "none";
        image4.style.display = "none"; // Hide the other image
        image4a.style.display = "none";
        image6.style.display = "none"; // Hide the other image
        image6a.style.display = "none";
        image7.style.display = "none"; // Hide the other image
        image7a.style.display = "none";
        image8.style.display = "none"; // Hide the other image
        image8a.style.display = "none";
        image9.style.display = "none"; // Hide the other image
        image9a.style.display = "none";
    } else {
        image5.style.display = "none";
        image5a.style.display = "none";
    }
});

patent6Button.addEventListener("click", () => {
    toggleActiveButton(patent6Button);
    if (image6.style.display === "none" || image6.style.display === "") {
        image6.style.display = "flex";
        image6a.style.display = "flex";
        image1.style.display = "none"; // Hide the other image
        image1a.style.display = "none";
        image2.style.display = "none"; // Hide the other image
        image2a.style.display = "none";
        image3.style.display = " none"; // Hide the other image
        image3a.style.display = "none";
        image4.style.display = "none"; // Hide the other image
        image4a.style.display = "none";
        image5.style.display = "none"; // Hide the other image
        image5a.style.display = "none";
        image7.style.display = "none"; // Hide the other image
        image7a.style.display = "none";
        image8.style.display = "none"; // Hide the other image
        image8a.style.display = "none";
        image9.style.display = "none"; // Hide the other image
        image9a.style.display = "none";
    } else {
        image6.style.display = "none";
        image6a.style.display = "none";
    }
});

patent7Button.addEventListener("click", () => {
    toggleActiveButton(patent7Button);
    if (image7.style.display === "none" || image7.style.display === "") {
        image7.style.display = "flex";
        image7a.style.display = "flex";
        image1.style.display = "none"; // Hide the other image
        image1a.style.display = "none";
        image2.style.display = "none"; // Hide the other image
        image2a.style.display = "none";
        image3.style.display = "none"; // Hide the other image
        image3a.style.display = "none";
        image4.style.display = "none"; // Hide the other image
        image4a.style.display = "none";
        image5.style.display = "none"; // Hide the other image
        image5a.style.display = "none";
        image6.style.display = "none"; // Hide the other image
        image6a.style.display = "none";
        image8.style.display = "none"; // Hide the other image
        image8a.style.display = "none";
        image9.style.display = "none"; // Hide the other image
        image9a.style.display = "none";
    } else {
        image7.style.display = "none";
        image7a.style.display = "none";
    }
});

patent8Button.addEventListener("click", () => {
    toggleActiveButton(patent8Button);
    if (image8.style.display === "none" || image8.style.display === "") {
        image8.style.display = "flex";
        image8a.style.display = "flex";
        image1.style.display = "none"; // Hide the other image
        image1a.style.display = "none";
        image2.style.display = "none"; // Hide the other image
        image2a.style.display = "none";
        image3.style.display = "none"; // Hide the other image
        image3a.style.display = "none";
        image4.style.display = "none"; // Hide the other image
        image4a.style.display = "none";
        image5.style.display = "none"; // Hide the other image
        image5a.style.display = "none";
        image6.style.display = "none"; // Hide the other image
        image6a.style.display = "none";
        image7.style.display = "none"; // Hide the other image
        image7a.style.display = "none";
        image9.style.display = "none"; // Hide the other image
        image9a.style.display = "none";
    } else {
        image8.style.display = "none";
        image8a.style.display = "none";
    }
});

patent9Button.addEventListener("click", () => {
    toggleActiveButton(patent9Button);
    if (image9.style.display === "none" || image9.style.display === "") {
        image9.style.display = "flex";
        image9a.style.display = "flex";
        image1.style.display = "none"; // Hide the other image
        image1a.style.display = "none";
        image2.style.display = "none"; // Hide the other image
        image2a.style.display = "none";
        image3.style.display = "none"; // Hide the other image
        image3a.style.display = "none";
        image4.style.display = "none"; // Hide the other image
        image4a.style.display = "none";
        image5.style.display = "none"; // Hide the other image
        image5a.style.display = "none";
        image6.style.display = "none"; // Hide the other image
        image6a.style.display = "none";
        image7.style.display = "none"; // Hide the other image
        image7a.style.display = "none";
        image8.style.display = "none"; // Hide the other image
        image8a.style.display = "none";
    } else {
        image9.style.display = "none";
        image9a.style.display = "none";
    }
});

// ... your existing code ...

  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Find the button element by its class
    var btnToggle = document.querySelector(".btn-toggle");

    // Find the light and dark mode stylesheets by their IDs
    var lightModeCSS = document.getElementById("innovation-light");
    var darkModeCSS = document.getElementById("innovation-dark");

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

