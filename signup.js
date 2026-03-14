const signupButton = document.querySelector("button[type='submit']");
const message = document.getElementById("message");

function checkUsername(){
    const userName = document.getElementById("signup_username").value;

    if (userName.length < 3 || userName.length > 20) {
        return "Username must be between 3 and 20 characters long";
    }

    const firstChar = userName[0];
    if (!(firstChar >= 'a' && firstChar <= 'z') && !(firstChar >= 'A' && firstChar <= 'Z')) {
        return "Username must start with a letter";
    }

    if (userName.includes(' ')) {
        return "Username cannot contain spaces";
    }

    for (let i = 0; i < userName.length; i++) {
        const c = userName[i];
        const isLetter = (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
        const isDigit = (c >= '0' && c <= '9');
        const isAllowed = (c === '-' || c === '_');
        if (!isLetter && !isDigit && !isAllowed) {
            return "Username can only contain letters, numbers, hyphens, and underscores";
        }
    }
    return "";
}

function checkPassword(){
    const password = document.getElementById("signup_password").value;

    if (password.length < 8) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }

    if (/\s/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }

    if (!/[A-Z]/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }

    if (!/[a-z]/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }

    if (!/[0-9]/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }

    if (!/[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?\/`~]/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }
    return "";
}

function checkConfirmPassword(){
    const password = document.getElementById("signup_password").value;
    const confirmPassword = document.getElementById("signup_confirm_password").value;

    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }
    return "";
}

function checkEmail(){
    const email = document.getElementById("email").value;

    if (/\s/.test(email)) {
        return "Invalid email (Must contain @ and end with .com, .net, or .io)";
    }

    if (!/^[^\s@]+@[^\s@]+\.(com|net|io)$/.test(email)) {
        return "Invalid email (Must contain @ and end with .com, .net, or .io)";
    }
    return "";
}

signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    message.style.backgroundColor = "";
    message.textContent = "";
    const errors = [];

    const usernameError = checkUsername();
    const passwordError = checkPassword();
    const confirmError = checkConfirmPassword();
    const emailError = checkEmail();

    if (usernameError) errors.push(usernameError);
    if (emailError) errors.push(emailError);
    if (passwordError) errors.push(passwordError);
    if (confirmError) errors.push(confirmError);

    if (errors.length > 0) {
        message.textContent = errors.join(" | ");
        message.style.backgroundColor = "#f28c8c";
        message.style.color = "#000000";
        return;
    }

    message.textContent = "Signup successful! Redirecting to login...";
    message.style.backgroundColor = "#a8d5a2";
    message.style.color = "#000000";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});