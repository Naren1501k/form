

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Simple validation: Check if username and password are not empty
    if (!username.trim() || !password.trim()) {
        alert('Please enter both username and password.');
        return;
    }

    // You can add additional validation logic here
    
    // If validation passes, proceed to login
    alert('Login successful!'); // Replace this with actual login logic
});

