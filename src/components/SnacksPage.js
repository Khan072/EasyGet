import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import data from "../data/data1";

const SnacksPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Buy Snacks Online</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((product) =>
          product.category === "snacks" ? (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px",
                width: "200px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                  height: "150px",
                }}
              />
              <h4 style={{ margin: "10px 0" }}>{product.name}</h4>
              <p>₹{product.price}</p>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ) : null
        )}
      </div>

      {/* Inline Media Query for Responsiveness */}
      <style>
        {`
          @media (max-width: 600px) {
            div[style*='display: flex'] {
              flex-direction: column;
              gap: 10px;
            }
            
            div[style*='width: 200px'] {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SnacksPage;
