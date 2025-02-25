import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "20px", marginTop: "20px" }}>
      <p>&copy; {new Date().getFullYear()} EasyGet.Org. All Rights Reserved.</p>
      <p>
        <a href="/privacy" style={{ color: "#00A899", textDecoration: "none", margin: "0 10px" }}>Privacy Policy</a> |
        <a href="/terms" style={{ color: "#00A899", textDecoration: "none", margin: "0 10px" }}>Terms of Service</a> |
        <a href="/contact" style={{ color: "#00A899", textDecoration: "none", margin: "0 10px" }}>Contact Us</a>
      </p>
    </footer>
  );
};

export default Footer;
