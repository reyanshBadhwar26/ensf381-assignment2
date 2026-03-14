const userName = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.querySelector("button[type='submit']");
const message = document.getElementById("message");

let users = []

async function fetchUsers() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await response.json();

        validateLogin();
    }
    catch(error){
        console.error("Error fetching users:", error);
    }

}


function validateLogin(){

    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); 

        for (let user of users) {
            if (user.username.toLowerCase() === userName.value.toLowerCase()) {
                if (user.email === password.value) {
                    message.style.backgroundColor = "#a8d5a2";
                    message.style.color = "#000";
                    message.style.padding = "10px";
                    message.style.borderRadius = "5px";
                    message.textContent = "Login successful! Redirecting...";
                    setTimeout(() => {
                        window.location.href = "menu_view.html";
                    }, 2000);
                    return;
                }
            }
        }
        message.style.backgroundColor = "#f28c8c";
        message.style.color = "#000";
        message.style.padding = "10px";
        message.style.borderRadius = "5px";
        message.textContent = "Invalid username or password. Please try again.";
    });
}


fetchUsers();

