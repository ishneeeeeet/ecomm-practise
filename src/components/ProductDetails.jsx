import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="Laptop" />
      <p>Price: {product.price}</p>
      {/* Add more details about the product */}
    </div>
  );
};

export default ProductDetails;
