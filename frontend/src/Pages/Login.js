import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store.js";
import axios from "axios";
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/login", {
        email: input.email,
        password: input.password,
      });

      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("User login successful");
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth="450px"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
          sx={{
            '@media (max-width:600px)': {
              padding: 2,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign={"center"}
            fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
          >
            Login
          </Typography>

          <TextField
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
            name="email"
            margin="normal"
            type="email"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
            name="password"
            margin="normal"
            type="password"
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            sx={{
              marginTop: 3,
              borderRadius: 3,
              padding: "10px 20px",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Submit
          </Button>

          <Button
            onClick={() => navigate('/resister')}
            sx={{
              marginTop: 2,
              borderRadius: 3,
              padding: "10px 20px",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
            fullWidth
          >
            Not a user? Please Register
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;


// import {React, useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Typography, TextField, Button } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { authActions } from "../redux/store.js";
// import axios from "axios";
// import  toast, { Toaster } from 'react-hot-toast';

// const Login = () => {
//   const navigate = useNavigate();
// const dispatch = useDispatch();
//   const [input, setInput] = useState({
//       email: "",
//       password: "",
//   });

//   //handle input change
// const handleChange = (e) => {
//   setInput((prevState) =>({
//       ...prevState,
//       [e.target.name]: e.target.value,
//   }));
// };

// //handle form submit
// // const handleSubmit = async (e) =>{
// //   e.preventDefault();
// //   try {
// //     const { data } = await axios.post("/api/v1/user/login", {
// //         email: input.email,
// //         password: input.password,
// //     });
// //     if (data.success) {
// //       localStorage.setItem("userId", data?.user._id);
// //       dispatch(authActions.login());
// //         toast.success("User login successful");
// //         navigate("/");
// //     }
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post("/api/v1/user/login", {
//       email: input.email,
//       password: input.password,
//     });
    
//     if (data.success) {
//       localStorage.setItem("userId", data?.user._id);
//       dispatch(authActions.login());
//       toast.success("User login successful");
//       navigate("/");
//     }
// } catch (error) {
//     console.error("Login failed:", error.response?.data || error.message);
//     alert(error.response?.data?.message || "Login failed. Please try again.");
// }

// }

// return (
//   <>
//   <form onSubmit={handleSubmit}>
//             <Box
//       maxWidth={450}
//       display={"flex"}
//       flexDirection={"column"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       margin={"auto"}
//       marginTop={5}
//       boxShadow={"10px 10px 20px #ccc"}
//       padding={3}
//       borderRadius={5}
//     >
//       <Typography
//         variant="h4"
//         sx={{ textTransform: "uppercase" }}
//         padding={3}
//         textAlign={"center"}
//       >
//         {" "}
//        Login
//       </Typography>
//       <TextField
//         placeholder="email"
//         value={input.email}
//         onChange={handleChange}
//         name="email"
//         margin="normal"
//         type={"email"}
//         required
//       />
//       <TextField
//         placeholder="password"
//         value={input.password}
//         onChange={handleChange}
//         name="password"
//         margin="normal"
//         type={"password"}
//         required
//       />
//       <Button
//         type="submit"
//         sx={{ marginTop: 3, borderRadius: 3 }}
//         variant="contained"
//         color="primary"
//       >
//         Submit
//       </Button>
//       <Button 
//       onClick={()=> navigate('/resister')}
//       sx={{ marginTop: 3, borderRadius: 3 }}>
//         Not a user ? Please Register
//       </Button>
//     </Box>
//     </form>
//   </>
   
//   )
// }

// export default Login
