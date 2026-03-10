import React, { useState } from "react";

function CartItem() {

  const [quantity, setQuantity] = useState(1);
  const price = 10;

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleDelete = () => alert("Item removed");

  return (
    <div>

      <h2>Shopping Cart</h2>

      <img src="https://via.placeholder.com/150" />

      <h3>Plant Item</h3>

      <p>Unit Price: ${price}</p>

      <div>

        <button onClick={handleDecrement}>-</button>

        <span>{quantity}</span>

        <button onClick={handleIncrement}>+</button>

      </div>

      <p>Total: ${price * quantity}</p>

      <button onClick={handleDelete}>Delete</button>

      <br /><br />

      <button onClick={() => alert("Checkout coming soon")}>
        Checkout
      </button>

      <button>Continue Shopping</button>

    </div>
  );
}

export default CartItem;
