import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDelete = (productId) => {
    fetch(`http://127.0.0.1:8000/products/${productId}`, { method: 'DELETE' })
      .then(() => setProducts(products.filter((p) => p.id !== productId)))
      .catch((error) => console.error('Error:', error));
  };

  const handleOrder = (productId) => {
    fetch('http://127.0.0.1:8000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id: productId })
    })
      .then((response) => response.json())
      .then(() => navigate('/orders'))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Products</h2>
      <Link to="/add-product" className="button">Add Product</Link>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => handleOrder(product.id)}>Order</button>
            <button onClick={() => navigate(`/edit-product/${product.id}`)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;