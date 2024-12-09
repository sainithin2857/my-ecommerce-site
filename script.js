// Simple shopping cart functionality
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.previousElementSibling.previousElementSibling.textContent;
        const productPrice = this.previousElementSibling.textContent;

        cart.push({ name: productName, price: productPrice });

        console.log(cart);  // This logs the current items in the cart for now

        alert('Product added to cart!');
    });
});
