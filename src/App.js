import React, { useState } from 'react';
import Header from './components/Navbar/Header';
import './App.css';
import CandyShop from './components/CandyShop';
import CartPage from './components/CartPage';
import ContactUs from './components/Form/ContactUs';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (candyName, candyPrice) => {
    const existingItem = cartItems.find(
      (item) => item.name === candyName && item.price === candyPrice
    );

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.name === candyName && item.price === candyPrice
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { name: candyName, price: candyPrice, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (candyName, candyPrice) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.name === candyName && item.price === candyPrice
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleFormSubmit = (formData) => {
    const { name, price } = formData;
    addToCart(name, price);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const closeModal = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Header handleCartClick={handleCartClick} />
      <ContactUs handleFormSubmit={handleFormSubmit} />
      {!showCart ? (
        <CandyShop addToCart={addToCart} />
      ) : (
        <CartPage
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;