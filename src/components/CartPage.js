import React from 'react';
import Modal from './Cart/Modal';

const CartPage = ({ cartItems, removeFromCart, addToCart, closeModal }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal>
      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.name}>
                <p>
                  {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                </p>
                <button onClick={() => removeFromCart(item.name, item.price)}>
                  Remove
                </button>
                <button onClick={() => addToCart(item.name, item.price)}>
                  Add
                </button>
              </div>
            ))}
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default CartPage;