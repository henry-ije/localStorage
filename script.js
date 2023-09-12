    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');

    function signUp() {
        
        const email = document.getElementById('signup-email').value;
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // Save the user information in local storage
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Sign up successful! You can now sign in.');
        location.href = "index.html"; // Redirect to Login
    }

    function signIn() {
        
        const username = document.getElementById('signin-username').value;
        const password = document.getElementById('signin-password').value;

        // Retrieve user information from local storage
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
        
        if (username === savedUsername && password === savedPassword) {
            localStorage.setItem('sessionActive', 'true');
            alert('Sign in successful!');
            location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert('Invalid username or password. Please try again.');
        }
    }

    function logOut() {
        alert('Log out successful!');
        localStorage.removeItem('sessionActive');
        location.href = "index.html"; // Redirect to Login
    }