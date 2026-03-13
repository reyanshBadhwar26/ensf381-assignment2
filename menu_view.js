const cart = {};
/*
cart = {
  "Caramel Apple Crunch": {
    name: "Caramel Apple Crunch",
    price: 6.49,
    quantity: 2
  },

*/
const cartItemsContainer = document.getElementById("cart_items");

const addButtons = document.querySelectorAll(".add_btn");
const removeButtons = document.querySelectorAll(".remove_btn");
const actionButtons = document.querySelectorAll(".add_btn, .remove_btn");

actionButtons.forEach(function(button) {
    button.addEventListener("mouseenter", function() {
        const tile = button.closest(".ice_cream_tile");
        tile.classList.add("tile_hover");
    });

    button.addEventListener("mouseleave", function() {
        const tile = button.closest(".ice_cream_tile");
        tile.classList.remove("tile_hover");
    });
});

function getItemData(button) {
    const tile = button.closest(".ice_cream_tile");
    const name = tile.querySelector("h3").textContent;
    const priceText = tile.querySelector("p strong").parentElement.textContent;
    const price = parseFloat(priceText.replace("Price:", "").replace("$", "").trim());

    return { name, price };
}

function renderCart() {
    cartItemsContainer.innerHTML = "";

    const itemNames = Object.keys(cart); // "Caramel Apple Crunch"

    if (itemNames.length === 0) {
        // ZERO items in cart -> zero keys in cart object
        cartItemsContainer.innerHTML = '<p class="empty_cart">Your cart is empty.</p>';
        return;
    }

    itemNames.forEach(function(itemName) {
       
        const item = cart[itemName]; 
        /*
        item = {
            name: "Caramel Apple Crunch",
            price: 6.49,
            quantity: 2
        }
        */

        const itemTotal = item.price * item.quantity;

        const cartItem = document.createElement("div"); 
        cartItem.classList.add("cart_item"); // Create div and use cart item css

        cartItem.innerHTML = `
            <span class="cart_item_name">${item.name} (${item.quantity})</span>
            <span class="cart_item_price">$${itemTotal.toFixed(2)}</span>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
}

function addToCart(name, price) {
    if (cart[name]) {
        cart[name].quantity++;
    } else {
        cart[name] = {
            name: name,
            price: price,
            quantity: 1
        };
    }

    renderCart();
}

function removeFromCart(name) {
    if (!cart[name]) {
        return;
    }

    cart[name].quantity--;

    if (cart[name].quantity <= 0) {
        delete cart[name];
    }

    renderCart();
}

addButtons.forEach(function(button) {
    button.addEventListener("click", () => {
        const item = getItemData(button);
        addToCart(item.name, item.price);
    });
});

removeButtons.forEach(function(button) {
    button.addEventListener("click", () => {
        const item = getItemData(button);
        removeFromCart(item.name);
    });
});

renderCart();