import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div className="order-details">
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Buyer Name:</strong> {order.buyerName}</p>
      <p><strong>Product:</strong> {order.productName}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Total Price:</strong> ${order.totalPrice}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <h3>Buyer Communication</h3>
      <p>{order.communication}</p>
    </div>
  );
};

export default OrderDetails;