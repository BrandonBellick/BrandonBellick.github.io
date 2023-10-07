document.addEventListener('DOMContentLoaded', function () {
    const pageWrapper1 = document.querySelector('.page-wrapper1');
    const pageWrapper2 = document.querySelector('.page-wrapper2');
    const pageWrapper3 = document.querySelector('.page-wrapper3');
  
    const button1 = document.querySelector('.option1');
    const button2 = document.querySelector('.option2');
    const button3 = document.querySelector('.option3');
  
    button1.addEventListener('click', () => {
      if (pageWrapper1.style.display === 'none' || pageWrapper1.style.display === '') {
        pageWrapper1.style.display = 'flex';
        
        pageWrapper2.style.display = 'none';
        pageWrapper3.style.display = 'none';
      } else {
        pageWrapper1.style.display = 'none';
      }
    });
  
    button2.addEventListener('click', () => {
      if (pageWrapper2.style.display === 'none' || pageWrapper2.style.display === '') {
        pageWrapper2.style.display = 'flex';
        pageWrapper1.style.display = 'none';
        pageWrapper3.style.display = 'none';
      } else {
        pageWrapper2.style.display = 'none';
      }
    });
  
    button3.addEventListener('click', () => {
      if (pageWrapper3.style.display === 'none' || pageWrapper3.style.display === '') {
        pageWrapper3.style.display = 'flex';
        pageWrapper1.style.display = 'none';
        pageWrapper2.style.display = 'none';
      } else {
        pageWrapper3.style.display = 'none';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.options-wrapper button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Find the button element by its class
    var btnToggle = document.querySelector(".btn-toggle");
    
    // Find the light and dark mode stylesheets by their IDs
    var lightModeCSS = document.getElementById("about-light");
    var darkModeCSS = document.getElementById("about-dark");

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
