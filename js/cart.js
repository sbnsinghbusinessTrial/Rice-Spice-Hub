// ===============================
// RICE SPICE HUB CART SYSTEM (FINAL CLEAN)
// ===============================

// -------------------------------
// GET CART
// -------------------------------
function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// -------------------------------
// SAVE CART + AUTO UPDATE UI
// -------------------------------
function saveCart(cart){

    localStorage.setItem("cart", JSON.stringify(cart));

    updateUI(); // 🔥 SINGLE SOURCE OF TRUTH
}

// -------------------------------
// ADD TO CART
// -------------------------------
function addToCart(id, name, price, image){

    let cart = getCart();

    let existing = cart.find(item => item.id === id);

    if(existing){
        existing.quantity++;
    } else {
        cart.push({
            id,
            name,
            price: Number(price),
            image,
            quantity: 1
        });
    }

    saveCart(cart);

    alert(name + " added to cart!");
}

// -------------------------------
// REMOVE ITEM
// -------------------------------
function removeItem(id){

    let cart = getCart();

    cart = cart.filter(item => item.id !== id);

    saveCart(cart);

    displayCart();
}

// -------------------------------
// INCREASE QTY
// -------------------------------
function increaseQty(id){

    let cart = getCart();

    let item = cart.find(item => item.id === id);

    if(item){
        item.quantity++;
        saveCart(cart);
        displayCart();
    }
}

// -------------------------------
// DECREASE QTY
// -------------------------------
function decreaseQty(id){

    let cart = getCart();

    let item = cart.find(item => item.id === id);

    if(item){

        item.quantity--;

        if(item.quantity <= 0){
            cart = cart.filter(i => i.id !== id);
        }

        saveCart(cart);
        displayCart();
    }
}

// -------------------------------
// CART PAGE RENDER
// -------------------------------
function displayCart(){

    let cart = getCart();

    let container = document.getElementById("cart-items");
    let totalEl = document.getElementById("cart-total");

    if(!container || !totalEl) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        let lineTotal = item.price * item.quantity;
        total += lineTotal;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>Code: ${item.id}</p>
                    <p>¥${item.price}</p>

                    <div>
                        <button onclick="decreaseQty('${item.id}')">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQty('${item.id}')">+</button>
                    </div>

                    <p>Total: ¥${lineTotal.toLocaleString()}</p>

                    <button onclick="removeItem('${item.id}')">Remove</button>
                </div>
            </div>
        `;
    });

    totalEl.textContent = total.toLocaleString();
}

// -------------------------------
// MINI CART (HEADER)
// -------------------------------
function updateMiniCart(){

    let cart = getCart();

    let container = document.querySelector(".mini-cart-items");
    let totalEl = document.getElementById("mini-cart-total");

    if(!container || !totalEl) return;

    container.innerHTML = "";

    let total = 0;

    if(cart.length === 0){
        container.innerHTML = "<p style='padding:10px;'>Cart is empty</p>";
        totalEl.textContent = "0";
        return;
    }

    cart.forEach(item => {

        let line = item.price * item.quantity;
        total += line;

        container.innerHTML += `
            <div class="mini-cart-item">
                ${item.name} x ${item.quantity}
                <span>¥${line.toLocaleString()}</span>
            </div>
        `;
    });

    totalEl.textContent = total.toLocaleString();
}

// -------------------------------
// MAIN UI UPDATER (ONLY ONE)
// -------------------------------
function updateUI(){

    let cart = getCart();

    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Existing Header UI
    let countEl = document.getElementById("cart-count");
    let totalEl = document.getElementById("mini-cart-total");

    if(countEl){
        countEl.textContent = count;
    }

    if(totalEl){
        totalEl.textContent = total.toLocaleString();
    }

    // Sticky Cart Bar
    let stickyCount = document.getElementById("sticky-cart-count");
    let stickyTotal = document.getElementById("sticky-cart-total");

    if(stickyCount){
        stickyCount.textContent = count;
    }

    if(stickyTotal){
        stickyTotal.textContent = total.toLocaleString();
    }

    updateMiniCart();
}

// -------------------------------
// TOGGLE MINI CART
// -------------------------------
function toggleMiniCart(){

    let box = document.getElementById("mini-cart");

    if(!box) return;

    updateMiniCart();

    box.style.display = (box.style.display === "block") ? "none" : "block";
}

// -------------------------------
// INIT (ALL PAGES)
// -------------------------------
document.addEventListener("DOMContentLoaded", updateUI);
window.addEventListener("focus", updateUI);
window.addEventListener("cartUpdated", updateUI);
