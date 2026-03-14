const signupButton = document.querySelector("button[type='submit']");
const message = document.getElementById("message");

function checkUsername(){
    const userName = document.getElementById("signup_username").value;
    // Check length is between 3 and 20 characters
    if (userName.length < 3 || userName.length > 20) {
        return "Username must be between 3 and 20 characters long.";
    }
    // Check first character is a letter (a-z or A-Z)
    const firstChar = userName[0];
    if (!(firstChar >= 'a' && firstChar <= 'z') && !(firstChar >= 'A' && firstChar <= 'Z')) {
        return "Username must start with a letter.";
    }
    // Check for no spaces
    if (userName.includes(' ')) {
        return "Username cannot contain spaces.";
    }
    // Check each character is alphanumeric, hyphen, or underscore
    for (let i = 0; i < userName.length; i++) {
        const c = userName[i];
        const isLetter = (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
        const isDigit = (c >= '0' && c <= '9');
        const isAllowed = (c === '-' || c === '_');
        if (!isLetter && !isDigit && !isAllowed) {
            return "Username can only contain letters, numbers, hyphens, and underscores.";
        }
    }
    return "";
}

function checkPassword(){
    const password = document.getElementById("signup_password").value;
    // Check minimum length of 8 characters
    if (password.length < 8) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }
    // Check for no spaces
    if (/\s/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }
    // Check for at least one number
    if (!/[0-9]/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }
    // Check for at least one special character (!@#$%^&*()-_=+[]{}|;:'",.<>?/`~)
    if (!/[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/`~]/.test(password)) {
        return "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
    }
    return "";
}

function checkConfirmPassword(){
    const password = document.getElementById("signup_password").value;
    const confirmPassword = document.getElementById("signup_confirm_password").value;
    // Check that confirm password matches the password
    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }
    return "";
}

function checkEmail(){
    const email = document.getElementById("email").value;
    // Check for no spaces
    if (/\s/.test(email)) {
        return "Invalid email (Must contain @ and end with .com, .net, or .io)";
    }
    // Check valid email format: must have @ followed by domain ending in .com, .net, or .io
    if (!/^[^\s@]+@[^\s@]+\.(com|net|io)$/.test(email)) {
        return "Invalid email (Must contain @ and end with .com, .net, or .io)";
    }
    return "";
}

signupButton.addEventListener( "click", (event) =>
{
    event.preventDefault();

    if (checkUsername()){
        message.textContent = checkUsername();
        message.style.color = "red";
        return;
    } 

    if (checkPassword()){
        message.textContent = checkPassword();
        message.style.color = "red";
        return;
    } 

    if (checkConfirmPassword()){
        message.textContent = checkConfirmPassword();
        message.style.color = "red";
        return;
    } 

    if (checkEmail()){
        message.textContent = checkEmail();
        message.style.color = "red";
        return;
    } 

    message.textContent = "Signup successful! Redirecting to login...";
    message.style.color = "green";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);

}

)

