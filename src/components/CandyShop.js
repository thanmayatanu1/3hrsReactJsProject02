import React from 'react';

const CandyShop = ({ addToCart }) => {
  const handleAddToCart = (candyName, candyPrice, quantity) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(candyName, candyPrice);
    }
  };

  const candies = [
    { name: 'Candy 1', price: 1.00 },
    { name: 'Candy 2', price: 2.00 },
    { name: 'Candy 3', price: 3.00 },
  ];

  return (
    <div>
      <h2>Candy Shop</h2>
      {candies.map((candy) => (
        <div key={candy.name}>
          <h3>{candy.name}</h3>
          <p>${candy.price.toFixed(2)}</p>
          <button onClick={() => handleAddToCart(candy.name, candy.price, 1)}>
            Buy One
          </button>
          <button onClick={() => handleAddToCart(candy.name, candy.price, 2)}>
            Buy Two
          </button>
          <button onClick={() => handleAddToCart(candy.name, candy.price, 3)}>
            Buy Three
          </button>
        </div>
      ))}
    </div>
  );
};

export default CandyShop;