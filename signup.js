const userName = document.getElementById("signup_username").value;
const password = document.getElementById("signup_password").value;
const confirmPassword = document.getElementById("signup_confirm_password").value;
const email = document.getElementById("email").value;

const signupButton = document.querySelector("button[type='submit']");
const message = document.getElementById("message");

function checkUsername(){
    console.log("checking username")
}

function checkPassword(){
    console.log("checking password")
}

function checkConfirmPassword(){
    if (password === confirmPassword) {
        return true;
    }
    return false;
}

function checkEmail(){
    console.log("checking email")
}

signupButton.addEventListener( "click", (event) =>
{
    event.preventDefault();

    if (!checkUsername){
        message.textContent = "";
    } 

    if (!checkUsername){
        message.textContent = "";
    } 

    if (!checkUsername){
        message.textContent = "";
    } 

    if (!checkUsername){
        message.textContent = "";
    } 



}

)

