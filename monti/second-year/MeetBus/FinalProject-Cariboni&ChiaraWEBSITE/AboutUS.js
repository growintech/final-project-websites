
// ========================================
// WAIT FOR PAGE TO LOAD
// ========================================

// This ensures all HTML is loaded before we run our JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // GET ALL THE BUTTONS
    // ========================================

    // querySelectorAll finds ALL elements with class "learn-more-btn"
    // It returns an array-like list of all matching elements
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');


    // ========================================
    // ADD CLICK LISTENERS TO BUTTONS
    // ========================================

    // forEach loops through each button in our list
    learnMoreButtons.forEach(function(button) {

        // addEventListener waits for a "click" on this button
        button.addEventListener('click', function() {

            // Get the data-target attribute (either "irina" or "alessandro")
            const target = button.getAttribute('data-target');

            // Show an alert with personalized message
            if (target === 'irina') {
                alert('🎨 Irina loves creativity! She spends her time painting, writing music, and dreaming big!');
            } else if (target === 'alessandro') {
                alert('💻 Alessandro is a tech enthusiast! He enjoys coding projects, playing soccer, and exploring new technologies!');
            }

            // Add a fun animation to the button after clicking
            animateButton(button);
        });
    });


    // ========================================
    // PHOTO SLOT CLICK INTERACTION
    // ========================================

    // Get all photo placeholders
    const photoSlots = document.querySelectorAll('.photo-placeholder');

    // Add click event to each photo
    photoSlots.forEach(function(photo) {
        photo.addEventListener('click', function() {

            // Add a pulse animation class
            photo.classList.add('pulse-animation');

            // Remove the animation class after 0.6 seconds
            // setTimeout runs code after a delay (in milliseconds)
            setTimeout(function() {
                photo.classList.remove('pulse-animation');
            }, 600);
        });
    });


    // ========================================
    // ADD PULSE ANIMATION DYNAMICALLY
    // ========================================

    // We need to add the CSS for pulse animation using JavaScript
    // This creates a new <style> element and adds it to the page
    const style = document.createElement('style');
    style.textContent = `
        .pulse-animation {
            animation: pulse 0.6s ease-in-out;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.15);
            }
            100% {
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);


    // ========================================
    // SMOOTH SCROLL EFFECT
    // ========================================

    // This adds a smooth scroll when page loads
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Makes scrolling smooth instead of instant
    });


    // ========================================
    // PARALLAX EFFECT ON SCROLL
    // ========================================

    // Get the header element
    const header = document.querySelector('.header');

    // addEventListener with 'scroll' watches for page scrolling
    window.addEventListener('scroll', function() {

        // window.scrollY tells us how far down the page is scrolled
        const scrolled = window.scrollY;

        // Move header up slightly as we scroll down (parallax effect)
        // scrollY / 3 means header moves 1px for every 3px we scroll
        header.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';

        // Fade out header as we scroll
        // 1 - (scrollY / 500) gradually reduces opacity
        const opacity = 1 - (scrolled / 500);
        header.style.opacity = opacity;
    });


    // ========================================
    // FUNCTION: ANIMATE BUTTON
    // ========================================

    // This is a reusable function that animates any button we pass to it
    function animateButton(button) {

        // Change button text temporarily
        const originalText = button.textContent;
        button.textContent = '✓ Thanks!';

        // Change back after 2 seconds (2000 milliseconds)
        setTimeout(function() {
            button.textContent = originalText;
        }, 2000);

        // Add a quick shake animation
        button.style.animation = 'shake 0.5s';

        // Remove animation after it finishes
        setTimeout(function() {
            button.style.animation = '';
        }, 500);
    }


    // ========================================
    // ADD SHAKE ANIMATION CSS
    // ========================================

    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(shakeStyle);


    // ========================================
    // CONSOLE MESSAGE
    // ========================================

    // This prints a message in the browser console (F12 to see it)
    console.log('👋 Welcome to Irina & Alessandro\'s page!');
    console.log('🎉 All JavaScript loaded successfully!');

});


// ========================================
// EXPLANATION OF KEY CONCEPTS
// ========================================

/*
1. EVENT LISTENERS:
   - Like "ears" that wait for something to happen (click, scroll, etc.)
   - When the event happens, they run a function

2. QUERYSELECTOR:
   - Finds HTML elements on the page
   - querySelector finds ONE element
   - querySelectorAll finds ALL matching elements

3. FOREACH:
   - Loops through each item in a list
   - Runs the same code for each item

4. SETTIMEOUT:
   - Waits a certain time, then runs code
   - Time is in milliseconds (1000ms = 1 second)

5. STYLE PROPERTY:
   - Lets us change CSS of an element using JavaScript
   - Example: element.style.color = 'red';

6. CLASSLIST:
   - Manages CSS classes on an element
   - .add() adds a class
   - .remove() removes a class
*/
