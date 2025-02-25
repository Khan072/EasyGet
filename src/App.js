import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ads from "./components/Ads";
import Footer from "./components/Footer";
import PharmacyPage from "./components/PharmacyPage";
import Login from "./components/Login";import BabyCarePage from "./components/BabyCarePage";
import GeneralPage from "./components/GeneralPage";
import SnacksPage from "./components/SnacksPage";

function App() {
  return (
    <Router>
      <Navbar />
      <h1> <center>Welcome to EasyGet</center></h1>
      
      <Routes>
        <Route path="/" element={<>
          <Ads />
          <Footer />
        </>} />
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path="/baby" element={<BabyCarePage />} />
        <Route path="/general" element={<GeneralPage />} />
        <Route path="/snacks" element={<SnacksPage />} />
        <Route path="/login" element={<Login />} />
    
      </Routes>
    </Router>
  );
}

export default App;
