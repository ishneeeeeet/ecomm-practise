/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { cartContext } from "../context/context";
import ProductCard from "../components/ProductCard";
import InputSearch from "../components/InputSearch";

const Home = () => {
  const { cart, addToCart } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(response.data);
    };
    fetchDetails();
  }, []);

  useEffect(() => {
    const filteredArray = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filteredArray);
  }, [search, products]);

  return (
    <>
      <InputSearch value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {filteredProducts.length === 0
          ? products.map((product) => <ProductCard product={product} />)
          : filteredProducts.map((product) => (
              <ProductCard product={product} />
            ))}
      </div>
    </>
  );
};

export default Home;
