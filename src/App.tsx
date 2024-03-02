// import React from "react";
// import Navbar from "./components/Navbar";
import "./App.css";
// import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SignUp from "./components/pages/SignUp";
// import Login from "./components/pages/Login"; // Corrected import
// import Footer from "./components/Footer";
import Chatbot from "./components/pages/chatbot"; // Corrected import
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/1" element={<Home />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
