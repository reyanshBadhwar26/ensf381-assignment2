const timer = document.getElementById("timer");
const topping1 = document.getElementById("topping1");
const topping2 = document.getElementById("topping2");
const topping3 = document.getElementById("topping3");
const typeCup = document.getElementById("type_cup");
const typeCone = document.getElementById("type_cone");
const typeSubmitButton = document.querySelector("button[name='update_order'][value='submit_icecream_type']");
const toppingsSubmitButton = document.querySelector("button[name='update_order'][value='submit_icecream_toppings']");

let timeAvailable = 600; // 10 minutes in seconds

function updateTimer() {
    const minutes = Math.floor(timeAvailable / 60);
    const seconds = timeAvailable % 60;
    timer.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

setInterval(() => {
    if (timeAvailable > 0) {
        timeAvailable--;
        updateTimer();
        console.log("Time left: " + timeAvailable);
    }
    else {
        window.location.href = "order_summary.html";
    }
}, 1000);

typeSubmitButton.addEventListener("click", () => {
    if (!(typeCup.checked) && !(typeCone.checked)) {
        alert("Please select a type of ice cream.");
    }
});

toppingsSubmitButton.addEventListener("click", () => {
    if (!(topping1.checked) && !(topping2.checked) && !(topping3.checked)) {
        alert("Please select at least one topping.");
    }
});



