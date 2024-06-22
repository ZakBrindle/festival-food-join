window.addEventListener('DOMContentLoaded', (event) => {
    // Grab the button by its id
    const guestLoginButton = document.getElementById('guest-login-button');
    
    // Add click event listener
    guestLoginButton.addEventListener('click', () => {
        // Redirect to the specified URL
        window.location.href = './coming-soon.html';
    });
});