import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            console.log("🔵 Signup request sending..."); // Debugging ke liye
            
            const response = await axios.post("http://localhost:8002/api/auth/signup", {
                name,
                email,
                password
            });

            console.log("🟢 Signup successful!", response.data); // ✅ Check response
            alert("Signup Successful! 🎉");
            
            // Redirect user to login page after signup
            window.location.href = "/login"; 
        } catch (error) {
            console.error("🔴 Signup failed!", error.response); // ✅ Check error response
            
            // Show error message
            alert("Signup Failed! ❌ " + (error.response?.data?.message || "Server error"));
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
