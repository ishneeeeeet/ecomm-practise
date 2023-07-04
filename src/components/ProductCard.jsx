import React, { useContext } from "react";
import { cartContext } from "../context/context";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(cartContext);
  return (
    <div key={product.id} className="rounded-md border">
      <img
        src={product.image}
        alt="Laptop"
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {product.title}
        </h1>
        
        
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-sm font-semibold">
            Price: {product.price}
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
