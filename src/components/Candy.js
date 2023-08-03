import React from 'react';

const Candy = ({ name, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(name, price);
  };

  return (
    <div className="candy">
      <h4>{name}</h4>
      {typeof price === 'number' ? (
        <p>${price.toFixed(2)}</p>
      ) : (
        <p>Price not available</p>
      )}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Candy;