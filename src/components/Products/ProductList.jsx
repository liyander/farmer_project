import React from 'react';

const ProductList = () => {
  const products = [
    // Sample product data
    { id: 1, name: 'Organic Tomatoes', price: 2.5, description: 'Fresh organic tomatoes from local farms.' },
    { id: 2, name: 'Free-Range Eggs', price: 3.0, description: 'Eggs from free-range chickens, rich in flavor.' },
    { id: 3, name: 'Local Honey', price: 5.0, description: 'Pure honey sourced from local beekeepers.' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;