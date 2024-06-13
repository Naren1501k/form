
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message");
    message.innerHTML = "Thank you, " + name + "! Your email (" + email + ") has been submitted.";
    message.style.display = "block"; // Display the message
  });

