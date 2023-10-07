

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
    

patent1Button.addEventListener("click", () => {
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
    } else {
        image1.style.display = "none";
        image1a.style.display = "none";
    }
});

patent2Button.addEventListener("click", () => {
    if (image2.style.display === "none" || image2.style.display === "") {
        image2.style.display = "flex";
        image1.style.display = "none"; // Hide the other image
        image3.style.display = "none";
        image4.style.display = "none"; // Hide the other image
        image5.style.display = "none";
        image6.style.display = "none"; // Hide the other image
        image7.style.display = "none";
        image8.style.display = "none"; // Hide the other image
        image9.style.display = "none";
    } else {
        image2.style.display = "none";
    }
});
    // Add click event listeners to each button
patent3Button.addEventListener("click", () => {
    if (image3.style.display === "none" || image3.style.display === "") {
        image2.style.display = "none";
        image1.style.display = "none"; // Hide the other image
        image3.style.display = "flex";
        image4.style.display = "none"; // Hide the other image
        image5.style.display = "none";
        image6.style.display = "none"; // Hide the other image
        image7.style.display = "none";
        image8.style.display = "none"; // Hide the other image
        image9.style.display = "none";
    } else {
        image3.style.display = "none";
    }
    });
  
    patent4Button.addEventListener("click", () => {
        if (image4.style.display === "none" || image4.style.display === "") {
            image2.style.display = "none";
            image1.style.display = "none"; // Hide the other image
            image3.style.display = "none";
            image4.style.display = "flex"; // Hide the other image
            image5.style.display = "none";
            image6.style.display = "none"; // Hide the other image
            image7.style.display = "none";
            image8.style.display = "none"; // Hide the other image
            image9.style.display = "none";
        } else {
            image4.style.display = "none";
        }
    });
  
    patent5Button.addEventListener("click", () => {
        if (image5.style.display === "none" || image5.style.display === "") {
            image2.style.display = "none";
            image1.style.display = "none"; // Hide the other image
            image3.style.display = "none";
            image4.style.display = "none"; // Hide the other image
            image5.style.display = "flex";
            image6.style.display = "none"; // Hide the other image
            image7.style.display = "none";
            image8.style.display = "none"; // Hide the other image
            image9.style.display = "none";
        } else {
            image5.style.display = "none";
        }
    });
  
    patent6Button.addEventListener("click", () => {
        if (image6.style.display === "none" || image6.style.display === "") {
            image2.style.display = "none";
            image1.style.display = "none"; // Hide the other image
            image3.style.display = "none";
            image4.style.display = "none"; // Hide the other image
            image5.style.display = "none";
            image6.style.display = "flex"; // Hide the other image
            image7.style.display = "none";
            image8.style.display = "none"; // Hide the other image
            image9.style.display = "none";
        } else {
            image6.style.display = "none";
        }
    });
  
    patent7Button.addEventListener("click", () => {
        if (image7.style.display === "none" || image7.style.display === "") {
            image2.style.display = "none";
            image1.style.display = "none"; // Hide the other image
            image3.style.display = "none";
            image4.style.display = "none"; // Hide the other image
            image5.style.display = "none";
            image6.style.display = "none"; // Hide the other image
            image7.style.display = "flex";
            image8.style.display = "none"; // Hide the other image
            image9.style.display = "none";
        } else {
            image7.style.display = "none";
        }
    });
  
    patent8Button.addEventListener("click", () => {
        if (image8.style.display === "none" || image8.style.display === "") {
            image2.style.display = "none";
            image1.style.display = "none"; // Hide the other image
            image3.style.display = "none";
            image4.style.display = "none"; // Hide the other image
            image5.style.display = "none";
            image6.style.display = "none"; // Hide the other image
            image7.style.display = "none";
            image8.style.display = "flex"; // Hide the other image
            image9.style.display = "none";
        } else {
            image8.style.display = "none";
        }
    });
  
    patent9Button.addEventListener("click", () => {
        if (image9.style.display === "none" || image9.style.display === "") {
            image2.style.display = "none";
            image1.style.display = "none"; // Hide the other image
            image3.style.display = "none";
            image4.style.display = "none"; // Hide the other image
            image5.style.display = "none";
            image6.style.display = "none"; // Hide the other image
            image7.style.display = "none";
            image8.style.display = "none"; // Hide the other image
            image9.style.display = "flex";
        } else {
            image9.style.display = "none";
        }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Find the button element by its class
    var btnToggle = document.querySelector(".btn-toggle");
    
    // Find the light and dark mode stylesheets by their IDs
    var lightModeCSS = document.getElementById("innovation-light");
    var darkModeCSS = document.getElementById("innovation-dark");

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