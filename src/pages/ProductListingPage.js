import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import  MainComponents from "../components/MainComponents";
import Section from "../components/Section";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("");

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially set all products as filtered
      });
  }, []);

  // Function to apply the filter
  const applyFilter = (filterType) => {
    let updatedProducts = [...products];

    switch (filterType) {
      case "recommended":
        updatedProducts = products;  // No change for "Recommended" filter (for now)
        break;
      case "newest":
        updatedProducts = [...products].sort((a, b) => b.id - a.id); // Sort by newest (ID-based)
        break;
      case "priceHighToLow":
        updatedProducts = [...products].sort((a, b) => b.price - a.price); // Sort by price high to low
        break;
      case "priceLowToHigh":
        updatedProducts = [...products].sort((a, b) => a.price - b.price); // Sort by price low to high
        break;
      default:
        updatedProducts = products;  // No filter applied
    }

    setFilteredProducts(updatedProducts);  // Update the displayed product list
  };

  return (
    <div>
      <Header />
      <Section />
      <MainComponents />
      <Footer />
    </div>
  );
};

export default ProductListingPage;
