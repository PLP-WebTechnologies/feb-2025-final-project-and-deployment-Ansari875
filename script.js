let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart`);
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    const totalPriceSpan = document.getElementById('totalPrice');
    
    cartDiv.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartDiv.appendChild(itemDiv);
        total += item.price;
    });

    totalPriceSpan.textContent = total.toFixed(2);
}

document.getElementById('checkoutButton').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});

window.onload = () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (document.getElementById('cart')) {
        updateCart();
    }
};
