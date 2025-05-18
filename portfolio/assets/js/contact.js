    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear errors
      document.getElementById('firstNameError').textContent = '';
      document.getElementById('lastNameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('messageError').textContent = '';

      // Get values
      const firstName = form.firstName.value.trim();
      const lastName = form.lastName.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      let isValid = true;

      if (!firstName) {
        document.getElementById('firstNameError').textContent = 'Enter a first name.';
        isValid = false;
      }
      if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Enter a last name.';
        isValid = false;
      }
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        isValid = false;
      }
      if (!message) {
        document.getElementById('messageError').textContent = 'Please enter a message.';
        isValid = false;
      }

      if (isValid) {
        alert("Thank you for reaching out!");
        form.reset();
      }
    });