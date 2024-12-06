import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

const MainComponent = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterOption, setFilterOption] = useState("recommended");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Initialize filtered products
    };
    fetchProducts();
  }, []);

  // Handle filter change
  const handleFilterChange = (filter) => {
    setFilterOption(filter);

    let sortedProducts = [...products];
    if (filter === "priceHighToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (filter === "priceLowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filter === "newest") {
      sortedProducts.sort((a, b) => b.id - a.id); // Assuming higher ID = newer product
    } else if (filter === "popular") {
      // Example logic for "Popular" (randomized for now, replace with real logic)
      sortedProducts.sort((a, b) => Math.random() - 0.5);
    } else {
      sortedProducts = products; // Recommended (default order)
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.leftNav}>
          <strong>{filteredProducts.length}</strong> Products
          <span
            style={styles.toggleArrow}
            onClick={() => setIsSidebarVisible((prev) => !prev)}
          >
            {isSidebarVisible ? "<< Hide Filters" : ">> Show Filters"}
          </span>
        </div>
        <div>
          <select
            style={styles.filterDropdown}
            value={filterOption}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="recommended">Recommended</option>
            <option value="newest">Newest First</option>
            <option value="popular">Popular</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="priceLowToHigh">Price: Low to High</option>
          </select>
        </div>
      </nav>

      {/* Main Section */}
      <div style={styles.mainSection}>
        {/* Sidebar */}
        {isSidebarVisible && (
          <div style={styles.sidebar}>
            <Sidebar />
          </div>
        )}

        {/* Product Listing */}
        <div
          style={{
            ...styles.productListing,
            marginLeft: isSidebarVisible ? "0" : "20px",
          }}
        >
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  },
  leftNav: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize:"2.5vw",
  },
  toggleArrow: {
    cursor: "pointer",
    fontSize: "bold",
    marginLeft:"20px",
    color: "black",
    textDecoration: "underline",
  },
  filterDropdown: {
    padding: "5px 10px",
    fontSize: "2.5vw",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  mainSection: {
    display: "flex",
    marginTop: "20px",
  },
  sidebar: {
    width: "20%",
    borderRight: "1px solid #ddd",
    padding: "10px",
  },
  productListing: {
    width:"80%",
    flex: 1,
    padding: "20px",
  },
};

export default MainComponent;
