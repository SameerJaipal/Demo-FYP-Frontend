import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { firestore } from "../../firebase";
import { collection, addDoc } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

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

const SignUp = () => {
  const theme = useTheme();
  const history = useHistory();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        username,
        email,
      });

      // Show success message
      toast.success("User registered successfully");

      // Redirect to login page
      history.push("/login");
    } catch (err) {
      console.error("Error registering user: ", err);
      setError("Failed to register user. Please try again.");
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
        src="/videos/video (2160p) (1).mp4"
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
        m={"2rem auto"}
        borderRadius={5}
        sx={{ boxShadow: 5 }}
        backgroundColor={"white"}
      >
        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant="h3">Sign Up</Typography>
          <TextField
            label="Username"
            required
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            required
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
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
            Sign Up
          </Button>
          <Typography mt={2}>
            Already have an account ? <Link to="/login">Please Login</Link>
          </Typography>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;
