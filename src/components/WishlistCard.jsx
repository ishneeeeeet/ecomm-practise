import React, { useContext } from "react";
import cartContext from "../context/context";

const WishlistCard = ({ product }) => {
  const { wishlist } = useContext(cartContext);
  return (
    <div className="flex w-full space-x-2 sm:space-x-4">
      <img
        className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
        src={product.image}
        alt={product.title}
      />
      <div className="flex w-full flex-col justify-between pb-4">
        <div className="flex w-full justify-between space-x-2 pb-2">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
              {product.title}
            </h3>
            <p className="text-sm">{product.color}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
