const userName = document.getElementById("signup_username");
const password = document.getElementById("signup_password");
const confirmPassword = document.getElementById("signup_confirm_password");
const email = document.getElementById("email");
const signupButton = document.querySelector("button[type='submit']");
const message = document.getElementById("message");

function checkUsername(){
    console.log("checking username")
}

function checkPassword(){
    console.log("checking password")
}

function checkConfirmPassword(){
    console.log("checking username")
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

    

}

)

