function login() {
    let cnic = document.getElementById("cnic").value;
    let password = document.getElementById("password").value;

    // Hardcoded credentials for demonstration
    if (cnic === "45404-470123-4" && password === "pass12345678") {
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid CNIC or Password"); // Show error message
    }
}

// Password Visibility
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    let icon = this;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});

// Password Strength Checker
document.getElementById("password").addEventListener("input", function () {
    const strengthText = document.querySelector("#password-strength");
    const passwordValue = this.value;

    if (passwordValue.length === 0) {
        strengthText.textContent = "";
        strengthText.className = "";
    } else if (passwordValue.length < 8) {
        strengthText.textContent = "Weak Password";
        strengthText.className = "weak";
    } else if (passwordValue.length >= 8 && passwordValue.length < 12) {
        strengthText.textContent = "Medium Password";
        strengthText.className = "medium";
    } else {
        strengthText.textContent = "Strong Password";
        strengthText.className = "strong";
    }
});