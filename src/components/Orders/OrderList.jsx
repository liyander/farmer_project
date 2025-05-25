import React from 'react';

const OrderList = () => {
  const orders = [
    // Sample order data
    { id: 1, product: 'Tomatoes', quantity: 10, status: 'Pending' },
    { id: 2, product: 'Potatoes', quantity: 5, status: 'Shipped' },
    { id: 3, product: 'Carrots', quantity: 20, status: 'Delivered' },
  ];

  return (
    <div>
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;