import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import InputSearch from "../components/InputSearch";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Track the selected category
  const [sortBy, setSortBy] = useState(""); // Track the selected sort option

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(response.data);
    };
    fetchDetails();
  }, []);

  useEffect(() => {
    let filteredArray = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    // Apply category filter if a specific category is selected
    if (selectedCategory !== "All") {
      filteredArray = filteredArray.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply price sorting if a sort option is selected
    if (sortBy === "lowToHigh") {
      filteredArray.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filteredArray.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filteredArray);
  }, [search, products, selectedCategory, sortBy]);

  // Get unique categories from the products
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <InputSearch value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="flex space-x-4 py-4">
        {/* Category filter options */}
        <button
          className={`px-4 py-2 rounded-md ${
            selectedCategory === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex space-x-4 py-4">
        {/* Price sort options */}
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === "lowToHigh"}
            onChange={() => setSortBy("lowToHigh")}
            className="mr-1"
          />
          Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === "highToLow"}
            onChange={() => setSortBy("highToLow")}
            className="mr-1"
          />
          High to Low
        </label>
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {filteredProducts.length === 0
          ? products.map((product) => <ProductCard product={product} />)
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};

export default Home;
