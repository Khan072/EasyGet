import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { CartContext } from "../CartContext"; // ✅ Context import
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate(); // ✅ Navigation Hook
  const { cart, getTotalPrice } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loginUser,setloginUser]=useState("");
  const [userName,setUserName]=useState("");
 


  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
        setloginUser("login");
    } else {
        setloginUser("user");
        try {
            const userData = jwtDecode(token);
            console.log("Decoded Token:", userData); // ✅ Check what the token contains
            
            if (userData.username) {
                setUserName(userData.username); // ✅ Ensure the correct key is used
            } else {
                console.error("Username not found in token:", userData);
            }
        } catch (error) {
            console.error("Invalid token:", error);
        }
    }
}, []);


  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#ffe4c4",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <div>
        <img
          src="/logoe.png"
          alt="EasyGet Logo"
          style={{ height: "80px", width: "80px" }}
        />
      </div>

     
      <input
        type="text"
        placeholder="Search for items..."
        style={{
          padding: "8px",
          width: "40%",
          borderRadius: "20px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      {/* Right Side (Login & Cart) */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {
          loginUser==="login"?<button
          style={{
            padding: "8px 15px",
            backgroundColor: "#ff9f00",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")} // ✅ Redirect to Login Page
        >
          Login
        </button>:<p>{userName}</p>
        }
        

        {/* Cart Icon */}
        <div
          style={{
            fontSize: "20px",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          🛒 {cart.length} items ₹{getTotalPrice()}
        </div>

        {/* Cart Modal */}
        {isCartOpen && (
          <div
            style={{
              position: "absolute",
              right: 20,
              top: 50,
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              borderRadius: "5px",
              minWidth: "200px",
              zIndex: 100,
            }}
          >
            <h4>Cart Items</h4>
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{item.name}</span>
                  <span>₹{item.price} x {item.quantity}</span>
                </div>
              ))
            )}
            <hr />
            <p>Total: ₹{getTotalPrice()}</p>
            <button
              style={{
                padding: "5px 10px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
