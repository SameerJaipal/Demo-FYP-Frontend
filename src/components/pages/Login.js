import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
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
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Login = () => {
  const theme = useTheme();
  const history = useHistory();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [text] = useTypewriter({
    words: [' What is the definition of a non-filer according to the Companies Ordinance, 1984 as stated in the Finance Act of 2021?',
     'What changes have been made to the definition of Officer of Inland Revenue in the Ordinance and when did they become effective? ',
      'What is the definition of a public company according to the Companies Ordinance and the Finance Act?',
      'What is meant by the term taxpayer under the Finance Act, and who does it include? ',
      'What is the tax rate specified in the First Schedule for taxable income under this Ordinance? '
    ],
    loop:{},
    typeSpeed: 50,
    deleteSpeed: 20,
  });

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/login", { email, password });
      toast.success("Login Successfully");
      localStorage.setItem("authToken", true);
      history.push("/"); // Redirect to home page
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
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
        src='/videos/video (2160p) (1).mp4' // Change this to your video path
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
          backgroundColor: "white", // Change background color to white
          zIndex: 1, // Ensure box stays above the video
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="password"
            type="password"
            required
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
   
  );
};

export default Login;
