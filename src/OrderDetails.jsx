import React, { useState, useEffect } from 'react';

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/order-details')
      .then((response) => response.json())
      .then((result) => setOrderDetails(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Order Details</h2>
      {orderDetails.length === 0 ? <p>No orders found.</p> : (
        <ul>
          {orderDetails.map((order) => (
            <li key={order.id}>
              Order #{order.id} - Total: ${order.total_price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderDetails;
