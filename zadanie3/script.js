function validateForm(event) {
  event.preventDefault(); 
  document.getElementById("loginError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("birthdateError").textContent = "";
  const login = document.getElementById("login").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const showAdditionalFields = document.getElementById("showAdditionalFields").checked;
  const phone = document.getElementById("phone").value;
  const birthdate = document.getElementById("birthdate").value;
  if (login.length < 3) {
    document.getElementById("loginError").textContent = "The login must be at least 3 characters long.";
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    return;
  }
  if (password.length < 8) {
    document.getElementById("passwordError").textContent = "The password must be at least 8 characters long.";
    return;
  }
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "The password and the repeated password are not identical.";
    return;
  }
  if (showAdditionalFields) {
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById("phoneError").textContent = "The phone number can only contain digits.";
      return;
    }
    const today = new Date();
    const selectedDate = new Date(birthdate);
    const age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
      age--;
    }
    if (age < 18) {
      document.getElementById("birthdateError").textContent = "You must be at least 18 years old.";
      return;
    }
  }
  document.getElementById("registrationForm").submit();
}
document.getElementById("registrationForm").addEventListener("submit", validateForm);
document.getElementById("showAdditionalFields").addEventListener("change", function () {
  const additionalFields = document.getElementById("additionalFields");
  additionalFields.style.display = this.checked ? "block" : "none";
});
