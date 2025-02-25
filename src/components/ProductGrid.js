import React, { useState } from "react";

const products = [
  { id: 1, name: "Amul Gold Full Cream Fresh Milk", size: "500 ml", price: 34, image: "amul_gold_milk.png" },
  { id: 2, name: "Verka Standard Fresh Milk", size: "500 ml", price: 30, image: "verka_milk.png" },
  { id: 3, name: "Amul Moti Toned Milk (90 Days Shelf Life)", size: "450 ml", price: 33, image: "amul_moti_milk.png" },
  { id: 4, name: "Amul Salted Butter", size: "100 g", price: 60, image: "amul_butter.png" },
  { id: 5, name: "Amul Taaza Homogenised Toned Milk", size: "1 ltr", price: 74, image: "amul_taaza_milk.png" },
  { id: 6, name: "Bonn White Bread", size: "400 g", price: 45, image: "bonn_white_bread.png" },
  { id: 7, name: "Amul Masti Pouch Curd", size: "400 g", price: 35, image: "amul_masti_curd.png" },
  { id: 8, name: "Verka Curd", size: "400 g", price: 32, image: "verka_curd.png" },
  { id: 9, name: "Bonn High Fibre Brown Bread", size: "400 g", price: 55, image: "bonn_brown_bread.png" },
];

const ProductGrid = () => {
  const [cart, setCart] = useState({});

  const handleAdd = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemove = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const updatedCart = { ...prev, [id]: prev[id] - 1 };
      if (updatedCart[id] <= 0) delete updatedCart[id];
      return updatedCart;
    });
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", padding: "20px" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", textAlign: "center" }}>
          <img src={`/images/${product.image}`} alt={product.name} style={{ width: "100px", height: "100px" }} />
          <p style={{ fontWeight: "bold" }}>{product.name}</p>
          <p>{product.size}</p>
          <p>₹{product.price}</p>
          {cart[product.id] ? (
            <div>
              <button onClick={() => handleRemove(product.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{cart[product.id]}</span>
              <button onClick={() => handleAdd(product.id)}>+</button>
            </div>
          ) : (
            <button onClick={() => handleAdd(product.id)} style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>ADD</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
