let cartCount = 0;
let cartItems = [];
let cartTotal = 0;

function addToCart() {
  const product = {
    name: "Pastel Dream Lamp",
    price: 39.99
  };

  cartItems.push(product);
  cartCount++;
  cartTotal += product.price;

  // Update cart count
  document.getElementById('cart-count').textContent = cartCount;

  // Update cart items
  const cartList = document.getElementById('cart-items');
  const li = document.createElement('li');
  li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
  cartList.appendChild(li);

  // Update total
  document.getElementById('cart-total').textContent = `$${cartTotal.toFixed(2)}`;
}
