import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h2>Price: ${product.price}</h2>
      <h3>Farmer Details:</h3>
      <p>Name: {product.farmer.name}</p>
      <p>Contact: {product.farmer.contact}</p>
      <h3>Customer Reviews:</h3>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}:</strong> {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;