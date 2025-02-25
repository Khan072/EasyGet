import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Ads = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
      
      {/* Pharmacy Card */}
      <div  onClick={() => navigate("/pharmacy")}
      style={{ backgroundColor: "#00A899", color: "white", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center", position: "relative" }}>
        <h2>Pharmacy at your doorstep!</h2>
        <p>Cough syrups, pain relief sprays & more</p>
        <img src="https://www.pngmart.com/files/23/Pharmacy-PNG-Image.png" alt="Pharmacy Products" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
        <button style={{ padding: "10px", backgroundColor: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
          Order Now
        </button>
      </div>

      {/* Snacks & Munchies Card */}
      <div onClick={() => navigate("/snacks")}
       style={{ backgroundColor: "#FFCC00", color: "black", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center", position: "relative" }}>
        <h2>Snacks & Munchies</h2>
        <p>Delicious treats for every mood</p>
        <img src="https://www.pngmart.com/files/22/Snack-PNG.png" alt="Snacks & Munchies" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
        <button style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
          Order Now
        </button>
      </div>

      {/* Baby Care Card */}
      <div onClick={() => navigate("/baby")}
       style={{ backgroundColor: "#B0C4DE", color: "black", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center", position: "relative" }}>
        <h2>No time for a diaper run?</h2>
        <p>Get baby care essentials in minutes</p>
        <img src="https://www.bigbasket.com/media/uploads/p/xxl/40136606_4-pampers-diaper-pants-new-born.jpg" alt="Baby Care Products" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
        <button style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
          Order Now
        </button>
      </div>
          {/* General Store Card */}
          <div onClick={() => navigate("/general")}
          style={{ backgroundColor: "#8FBC8F", color: "black", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center", position: "relative" }}>
        <h2>General Store Essentials</h2>
        <p>Groceries, daily needs & more</p>
        <img src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Items-PNG-HD-Quality.png" alt="General Store" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
        <button style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
          Order Now
        </button>
      </div>

    </div>
  );
};

export default Ads;
