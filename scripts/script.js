// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Update footer year dynamically
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // Add functionality for adding products to cart
    const cart = [];

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            cart.push({ name: productName, price: productPrice });
            alert(`${productName} has been added to your cart.`);
        });
    });
});
