import React, { useContext, useState } from "react";
import { cartContext } from "../context/context";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(cartContext);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleViewDetails = () => {
    setShowDetails(true);
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
          <h1
            className="inline-flex items-center text-lg font-semibold"
            onClick={handleViewDetails}
          >
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

        <button
          onClick={handleViewDetails}
          type="button"
          className="mt-4 w-full rounded-sm bg-blue-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          View Details
        </button>

        {showDetails && <ProductDetails product={product} />}
      </div>
    </div>
  );
};

export default ProductCard;
