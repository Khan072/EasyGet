import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cart, getTotalPrice, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} ₹{item.price} x {item.quantity} = ₹
                {item.price * item.quantity}
                
              </li>
            ))}
          </ul>
          <h3>Total: ₹{getTotalPrice()}</h3>
          <button>Buy Now</button>
        </>
      )}
    </div>
  );
};

export default Cart;
