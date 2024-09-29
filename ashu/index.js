document.addEventListener('DOMContentLoaded', function () {
    // Handle Password Visibility Toggle
    const passwordInput = document.getElementById('password');
    const showButton = document.createElement('span');
    showButton.innerHTML = 'Show';
    showButton.style.cursor = 'pointer';
    showButton.style.color = '#4CAF50';
    showButton.style.marginLeft = '10px';
    showButton.style.position = 'absolute';
    showButton.style.right = '10px';
    showButton.style.top = '50%';
    showButton.style.transform = 'translateY(-50%)';
    passwordInput.style.paddingRight = '50px';
    passwordInput.parentNode.style.position = 'relative';
    passwordInput.parentNode.appendChild(showButton);

    showButton.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showButton.innerHTML = 'Hide';
        } else {
            passwordInput.type = 'password';
            showButton.innerHTML = 'Show';
        }
    });

    // Handle Splash Screen
    const logoSplash = document.getElementById('logoSplash');
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('hidden'); // Initially hide main content

    setTimeout(() => {
        logoSplash.style.display = 'none'; // Hide splash screen after 5 seconds
        mainContent.classList.remove('hidden'); // Show main content
        mainContent.style.display = 'flex'; // Display the main content as flex
    }, 5000);

    // Handle Login Form Animation and Loader
    const form = document.getElementById('login-form');
    const loginButton = form.querySelector('button[type="submit"]');
    const loginBox = document.querySelector('.login-box');
    const imageBox = document.querySelector('.image-box');
    const logoContainer = document.querySelector('.logo-container');
    const houseImg = document.querySelector('.house-img');

    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.style.display = 'none';
    const originalButtonContent = loginButton.innerHTML;

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting
        handleLogin();
    });

    function handleLogin() {
        loginButton.innerHTML = ''; // Clear button content
        loginButton.appendChild(loader); // Add loader to button
        loader.style.display = 'block'; // Show loader

        setTimeout(() => {
            loader.style.display = 'none'; // Hide loader after 1 second
            loginButton.innerHTML = originalButtonContent; // Restore original button content

            // After loader disappears, begin animations
            setTimeout(() => {
                // Shrink the login and image box, and center the logo after shrinking
                loginBox.classList.add('shrink');
                imageBox.classList.add('shrink');
                logoContainer.classList.add('center');

                // Animate house image to fullscreen after shrink animation completes
                setTimeout(() => {
                    houseImg.style.transition = 'all 0.5s ease-in-out';
                    houseImg.classList.add('fullscreen');
                    houseImg.style.opacity = '1';

                    // Final adjustments for the house image
                    setTimeout(() => {
                        houseImg.style.right = '0';
                        houseImg.style.width = '50%';
                        houseImg.style.height = '100%';
                    }, 50);
                }, 1000); // Delay house image animation to start after shrink
            }, 500); // Delay shrink animation to ensure loader disappears first
        }, 1000); // Loader is displayed for 1 second
    }
});
