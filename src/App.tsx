// import React from "react";
// import Navbar from "./components/Navbar";
import "./App.css";
// import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login"; // Corrected import
// import Footer from "./components/Footer";
import Chatbot from "./components/pages/chatbot"; // Corrected import
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/1" element={<Home />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
