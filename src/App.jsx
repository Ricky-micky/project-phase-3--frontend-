import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Products from './Products';
import OrderDetails from './OrderDetails';
import AddProduct from './AddProduct';
import './App.css';
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ELECTRONICS SHOP</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/products">Products</Link>
          <Link to="/order-details">Order Details</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
