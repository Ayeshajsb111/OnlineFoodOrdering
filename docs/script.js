
let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
}

function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Your Shopping Cart:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
        total += item.price;
    });

    message += "\nTotal Amount: ₹" + total;

    alert(message);
}

function searchFood() {
    let searchValue = document
        .getElementById("search")
        .value.toLowerCase();

    let foodCards = document.querySelectorAll(".food-card");

    foodCards.forEach(card => {
        let foodName = card.dataset.name;

        if (foodName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
