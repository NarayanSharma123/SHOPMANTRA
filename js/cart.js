window.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add to Cart Buttons
    let addToCartBtn = document.querySelectorAll(".add_to_card_btn");
    addToCartBtn.forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            const productCard = event.target.closest('.card');
            const productName = productCard.querySelector('.card-title').innerText;
            const productPrice = productCard.querySelector('.card-text').innerText.replace('₹', '');
            const productImage = productCard.querySelector('img').src;

            // Check if product already in cart
            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 1) + 1;  // quantity बढ़ाओ या 1 से शुरू करो
            } else {
                const product = {
                    name: productName,
                    price: productPrice,
                    img: productImage,
                    quantity: 1
                };
                cart.push(product);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} was added to Cart List`);
            window.location.href = "cart.html";
        });
    });

    // Display Cart Items and related buttons only if #cart-items exists (cart.html page)
    if (document.querySelector("#cart-items")) {
        const cartItemsContainer = document.querySelector("#cart-items");
        const cartEmptyHeading = document.querySelector(".cartEmptyHeading");

        if (cart.length === 0) {
            cartEmptyHeading.innerText = "Your Cart Is Empty";
            cartItemsContainer.innerHTML = ""; // खाली कर दो
        } else {
            // Show cart items with remove button
            cartItemsContainer.innerHTML = cart.map((item, index) => 
                `<div class="col-12 col-sm-6 col-md-4 col-lg-3 cartItems" style="margin-left:50px;">
                    <div class="card h-100 shadow">
                        <img src="${item.img}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">₹${item.price} × ${item.quantity}</p>
                            <button class="btn btn-sm btn-warning remove-item-btn" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </div>`
            ).join('');

            // Total Price Calculation
            let totalPrice = cart.reduce((total, item) => {
                return total + (parseFloat(item.price) * (item.quantity || 1));
            }, 0);
            const totalRs = document.querySelector(".total");
            totalRs.innerText = `Total Price: ₹${totalPrice.toFixed(2)}`;
            
            cartItemsContainer.insertAdjacentHTML("beforeend", `
              <div class="mt-3" style="margin-left:50px;">
                    <h4>Total Price: ₹${totalPrice.toFixed(2)}</h4>
                </div>`
            )

            // Remove Item Button functionality
            document.querySelectorAll(".remove-item-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const index = e.target.getAttribute("data-index");
                    const removedItem = cart.splice(index, 1)[0];
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert(`${removedItem.name} Was Removed`);
                    location.reload();
                })
            });
        }



        // Clear Cart Button functionality
        const clearCartBtn = document.getElementById('clear-cart-btn');
        if(clearCartBtn) {
            clearCartBtn.addEventListener("click", () => {
                localStorage.removeItem("cart");
                cart = [];
                alert("Cart Cleared");
                location.reload();
            })
        }
    }
});
