import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import toast from 'react-hot-toast';
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
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
            const { data } = await axios.post(`/api/v1/user/register`, {
                username: input.name,
                email: input.email,
                password: input.password,
            });
            if (data.success) {
                toast.success("Registration successful");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container justifyContent="center" spacing={2} sx={{ mt: 5 }}>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            margin={"auto"}
                            boxShadow={"10px 10px 20px #ccc"}
                            padding={3}
                            borderRadius={5}
                        >
                            <Typography
                                variant="h4"
                                sx={{ textTransform: "uppercase" }}
                                padding={3}
                                textAlign={"center"}
                            >
                                Register
                            </Typography>

                            <TextField
                                placeholder="name"
                                value={input.name}
                                onChange={handleChange}
                                name="name"
                                margin="normal"
                                type={"text"}
                                required
                                fullWidth
                            />
                            <TextField
                                placeholder="email"
                                value={input.email}
                                onChange={handleChange}
                                name="email"
                                margin="normal"
                                type={"email"}
                                required
                                fullWidth
                            />
                            <TextField
                                placeholder="password"
                                value={input.password}
                                onChange={handleChange}
                                name="password"
                                margin="normal"
                                type={"password"}
                                required
                                fullWidth
                            />
                            <Button
                                type="submit"
                                sx={{ marginTop: 3, borderRadius: 3 }}
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Submit
                            </Button>
                            <Button
                                onClick={() => navigate('/login')}
                                sx={{ marginTop: 3, borderRadius: 3 }}
                                fullWidth
                            >
                                Already Registered? Please Login
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default Register;


// import {React, useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Typography, TextField, Button } from "@mui/material";
// import toast, { Toaster } from 'react-hot-toast';
// import axios from "axios";
// const Register = () => {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     //handle input change
// const handleChange = (e) => {
//     setInput((prevState) =>({
//         ...prevState,
//         [e.target.name]: e.target.value,
//     }));
// };

// //handle form submit
// const handleSubmit = async (e) =>{
//     e.preventDefault();
//     try {
//         const { data } = await axios.post(`/api/v1/user/register`, {
//             username: input.name,
//             email: input.email,
//             password: input.password,
//           });
//           if (data.success) {
//            toast.success("Registration successful");
//             navigate("/login");
//           };
//     //  const {data} = await axios.post("/api/v1/user/register", {username:input.name, email:input.email, password:input.password});
//     //  if(data.success){
//     //     alert('Registration successfull')
//     //     navigate('/login');
//     //  }
//     } catch (error) {
//        console.log(error); 
//     }
// }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//               <Box
//         maxWidth={450}
//         display={"flex"}
//         flexDirection={"column"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         margin={"auto"}
//         marginTop={5}
//         boxShadow={"10px 10px 20px #ccc"}
//         padding={3}
//         borderRadius={5}
//       >
//         <Typography
//           variant="h4"
//           sx={{ textTransform: "uppercase" }}
//           padding={3}
//           textAlign={"center"}
//         >
//           {" "}
//           Register
//         </Typography>

//         <TextField
//           placeholder="name"
//           value={input.name}
//           onChange={handleChange}
//           name="name"
//           margin="normal"
//           type={"text"}
//           required
//         />
//         <TextField
//           placeholder="email"
//           value={input.email}
//           onChange={handleChange}
//           name="email"
//           margin="normal"
//           type={"email"}
//           required
//         />
//         <TextField
//           placeholder="password"
//           value={input.password}
//           onChange={handleChange}
//           name="password"
//           margin="normal"
//           type={"password"}
//           required
//         />
//         <Button
//           type="submit"
//           sx={{ marginTop: 3, borderRadius: 3 }}
//           variant="contained"
//           color="primary"
//         >
//           Submit
//         </Button>
//         <Button 
//         onClick={()=> navigate('/login')}
//         sx={{ marginTop: 3, borderRadius: 3 }}>
//           Already Registered? Please Login
//         </Button>
//       </Box>
//       </form>
//     </>
//   );
// };

// export default Register;
