document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Get user input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simple validation - Check if fields are not empty
    if (username === '' || password === '') {
      document.getElementById("message").innerHTML = "Please fill in all fields.";
    } else {
      // For demonstration purposes, let's assume valid credentials are 'user' and 'password'
      if (username === 'user' && password === 'password') {
        document.getElementById("message").innerHTML = "Sign in successful!";
        // You can redirect the user to another page here or perform other actions upon successful login
      } else {
        document.getElementById("message").innerHTML = "Invalid username or password.";
      }
    }
  });
  