document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault(); // Prevent the form submission if validation fails
      }
    });

    function validateForm() {
      var nameInput = document.getElementById("name");
      var phoneInput = document.getElementById("phone");
      var emailInput = document.getElementById("email");

      if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        return false;
      }

      if (phoneInput.value.trim() === "") {
        alert("Please enter your phone number.");
        return false;
      }

      if (emailInput.value.trim() === "") {
        alert("Please enter your email address.");
        return false;
      }

      // Add more complex validation if needed

      return true;
    }
  });