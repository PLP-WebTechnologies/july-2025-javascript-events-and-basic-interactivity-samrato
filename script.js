// ===============================
//  Part 1: Event Handling
// ===============================

// Button click event
document.getElementById("alertBtn").addEventListener("click", function() {
  alert(" Button was clicked!");
});

// Mouseover event
document.getElementById("hoverText").addEventListener("mouseover", function() {
  this.style.color = "blue";
  this.textContent = "You hovered over me! ";
});


// ===============================
// Part 2: Interactive Features
// ===============================

// Feature 1: Dark Mode Toggle
const toggleBtn = document.getElementById("toggleModeBtn");
toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") 
    ? " Toggle Light Mode" 
    : "Toggle Dark Mode";
});

// Feature 2: Counter
let count = 0;
const countDisplay = document.getElementById("countValue");

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});


// ===============================
//  Part 3: Form Validation
// ===============================

const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting by default

  // Grab input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Grab error fields
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let successMessage = document.getElementById("formSuccess");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  // Validate name
  if (name.length < 3) {
    nameError.textContent = " Name must be at least 3 characters.";
    valid = false;
  }

  // Validate email with regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = " Please enter a valid email address.";
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If everything is valid
  if (valid) {
    successMessage.textContent = " Form submitted successfully!";
    form.reset();
  }
});
