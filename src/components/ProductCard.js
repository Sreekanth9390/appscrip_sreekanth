import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
        height: "auto",
        width: "23vw",
        position: "relative", // Enables positioning of child elements
      }}
    >
      {/* Product Image */}
      <div style={{ position: "relative" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "15vw", // Limit max size
            objectFit: "contain", // Prevents distortion of image
            maxHeight: "14vw",
          }}
        />

        {/* New Product Overlay (for first product) */}
        {product.id === 1 && (
          <div
            style={{
              position: "absolute",
              top: "10px", // Position from top
              left: "-2vw", // Position from left
              backgroundColor: "red", // Red background for "New Product"
              color: "#fff",
              padding: "5px 10px",
              fontSize: "0.8vw",
              fontWeight: "bold",
              textTransform: "uppercase",
              borderRadius: "5px",
            }}
          >
            New Product
          </div>
        )}

        {/* Out of Stock Overlay (for product with ID = 2) */}
        {product.id === 2 && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Title */}
      <h3
        style={{
          fontSize: "1vw",
          margin: "10px 0",
          textAlign: "center",
          height: "40px", // Fixes height for consistency
          overflow: "hidden", // Prevents overflow
          textOverflow: "ellipsis", // Adds ellipsis for long text
          whiteSpace: "nowrap", // Prevents text from wrapping
          maxWidth: "200px",
        }}
      >
        {product.title}
      </h3>

      {/* Product Price and Actions */}
      <p
        style={{
          fontSize: "0.7vw",
          fontWeight: "bold",
          color: "#333",
          margin: "5px 0",
        }}
        className="productpara"
      >
        <pre>
          <Link to="/">
            Sign in
          </Link>{" "}
          or Create an account to see pricing{"      "}
          <span style={{ cursor: "pointer", color: "red" }}>♥️</span>{" "}
          {/* Icon */}
        </pre>
      </p>
    </div>
  );
};

export default ProductCard;
