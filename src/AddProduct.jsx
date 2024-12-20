import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [product, setProduct] = useState({ name: '', price: '', description: '', imageUrl: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents the default form submission (page refresh)
    
    // Send the product data (including the image URL) to the backend
    fetch('http://127.0.0.1:8000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then(() => {
        navigate('/products');  // Redirect after successful addition
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        ></textarea>

        <label>Product Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Product</button>  {/* Submit button to trigger the form submission */}
      </form>
    </div>
  );
}

export default AddProduct;
