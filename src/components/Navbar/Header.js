import React from 'react';

const Header = ({ handleCartClick }) => {
  return (
    <div className='flex'>
      <h1>The Candy Shop</h1>
      <span>Home</span>
      <span>Store</span>
      <span>About</span>
      <span>Contact Us</span>
      
        <button onClick={handleCartClick}>Cart </button>
     
    </div>
  );
};

export default Header;