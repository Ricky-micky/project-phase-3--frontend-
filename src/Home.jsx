import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to my Electronics Shop</h2>
      <Link to="/add-product" className="button">Add New Product</Link>
    </div>
  );
}

export default Home;
