import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import toast from "react-hot-toast";

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // Initialize useNavigate
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success("Login Successfully");
      localStorage.setItem("authToken", 'true');
      navigate("/chatbot"); // Use navigate instead of history.push
    } catch (err) {
      console.log(err);
      console.log("Email:", email);
      console.log("Password:", password);

      setError("Failed to login. Please check your credentials.");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (<>
    <Navbar/>
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        src='/videos/video (2160p) (1).mp4'
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        width={isNotMobile ? "40%" : "80%"}
        p={"2rem"}
        borderRadius={5}
        sx={{
          boxShadow: 5,
          backgroundColor: "white",
          zIndex: 1,
        }}
      >
        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant="h3">Login</Typography>
          <TextField
            label="email"
            type="email"
            required
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="password"
            type="password"
            required
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ color: "white", mt: 2 }}
          >
            Login
          </Button>
          <Typography mt={2}>
            Don't have an account? <Link to="/sign-up">Please Register</Link>
          </Typography>
        </form>
      </Box>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
