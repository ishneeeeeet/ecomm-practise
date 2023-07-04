import React, { useContext } from "react";
import { cartContext } from "../context/context";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useContext(cartContext);
  return <div>
    {wishlist.map((product) =>  <ProductCard product={product} />)}
   
  </div>;
};

export default Wishlist;
