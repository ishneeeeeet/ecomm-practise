import React, { useContext } from "react";
import { cartContext } from "../context/context";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useContext(cartContext);
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {wishlist.length === 0? "no products in your wishlist" : wishlist.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Wishlist;
