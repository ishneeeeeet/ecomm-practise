import React, { useContext } from "react";
import { cartContext } from "../context/context";

const Wishlist = () => {
  const { wishlist } = useContext(cartContext);
  return <div>
    {console.log(wishlist)}
  </div>;
};

export default Wishlist;
