import React, { useContext } from "react";
import { cartContext } from "../context/context";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(cartContext);
  
  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <div key={product.id} className="rounded-md border">
      <Link to="/">
        <img
          src={product.image}
          alt="Laptop"
          className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
        />
      </Link>
      <div className="p-4">
        <Link>
          <h1 className="inline-flex items-center text-lg font-semibold">
            {product.title}
          </h1>
        </Link>

        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-sm font-semibold">
            Price: {product.price}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
        <Link to={`/products/${product.id}`}>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-blue-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
