import { React, useState, useEffect } from 'react';
import { Box, InputLabel, Typography, TextField, Button } from "@mui/material";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditBlog = () => {
    const [blog, setBlog] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image: "",
    });

    // Get blog details
    const getEditBlog = async () => {
        try {
            const { data } = await axios.get(`/edit-blog/${id}`);
            if (data?.success) {
                setBlog(data?.blog);
                setInputs({
                    title: data?.blog.title,
                    description: data?.blog.description,
                    image: data?.blog.image,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getEditBlog();
    }, [id]);

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id,
            });

            if (data?.success) {
                toast.success("Blog updated successfully");
                navigate("/my-blogs");
            } else {
                alert("Failed to update blog");
            }
        } catch (error) {
            console.error("Error updating blog:", error.response?.data || error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    border={1}
                    borderRadius={5}
                    padding={2}
                    margin={"10px auto"}
                    boxShadow={"10px 10px 20px #ccc"}
                    width={"90%"}
                    maxWidth={"600px"}
                    justifyItems={"center"}
                    display={"flex"}
                    flexDirection={"column"}
                    marginTop={"10px"}
                >
                    <Typography
                        variant="h4"
                        textAlign={"center"}
                        padding={3}
                        fontWeight={"bold"}
                        color="darkblue"
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
                    >
                        Edit Blog
                    </Typography>

                    <InputLabel
                        sx={{
                            mb: 1,
                            mt: 2,
                            fontWeight: "bold",
                            fontSize: { xs: "16px", sm: "18px", md: "24px" },
                        }}
                    >
                        Title
                    </InputLabel>
                    <TextField
                        name="title"
                        value={inputs.title}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        required
                    />

                    <InputLabel
                        sx={{
                            mb: 1,
                            mt: 2,
                            fontWeight: "bold",
                            fontSize: { xs: "16px", sm: "18px", md: "24px" },
                        }}
                    >
                        Description
                    </InputLabel>
                    <TextField
                        name="description"
                        value={inputs.description}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        multiline // <-- Add this to allow multiple lines
                        rows={30}
                        required
                    />

                    <InputLabel
                        sx={{
                            mb: 1,
                            mt: 2,
                            fontWeight: "bold",
                            fontSize: { xs: "16px", sm: "18px", md: "24px" },
                        }}
                    >
                        Image URL
                    </InputLabel>
                    <TextField
                        name="image"
                        value={inputs.image}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        required
                    />

                    <Button
                        type="submit"
                        color="warning"
                        variant="contained"
                        sx={{
                            marginTop: 2,
                            padding: "12px",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        }}
                    >
                        Update
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default EditBlog;


// import {React, useState, useEffect} from 'react'
// import { Box, InputLabel, Typography, TextField, Button } from "@mui/material";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import {navigate ,useNavigate } from 'react-router-dom';
// import  toast, { Toaster } from 'react-hot-toast';

// const EditBlog = () => {
//     const [blog, setBlog]= useState({});
//     const id = useParams().id;
//     const navigate = useNavigate();
//     const [inputs, setInputs] = useState({
//         title: "",
//         description: "",
//         image: "",
// });

//     //Get blog details

//     const getEditBlog = async() => {
//         try {
//             // const {data} = await axios.get(`/edit-blog/${id}?timestamp=${Date.now()}`);
//             const {data} = await axios.get(`/edit-blog/${id}`);
//             if(data?.success){
//                 setBlog(data?.blog);
//                 setInputs({
//                     title: data?.blog.title,
//                     description: data?.blog.description,
//                     image: data?.blog.image,
//                 })
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     useEffect(() =>{
//         getEditBlog();
//     }, [id]);

    
    
//       const handleChange = (e) => {
//         setInputs((prevState) => ({
//           ...prevState,
//           [e.target.name]: e.target.value,
//         }));
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
//             title: inputs.title,
//             description: inputs.description,
//             image: inputs.image,
//             user: id, // Use the correctly retrieved id
//           });
    
//           if (data?.success) {
//            toast.success("Blog updated successfully");
//             navigate("/my-blogs");
//           } else {
//             alert("Failed to create blog");
//           }
//         } catch (error) {
//           console.error("Error creating blog:", error.response?.data || error.message);
//         }
//       };

//     console.log(blog);
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Box
//           border={1}
//           borderRadius={5}
//           padding={2}
//           margin={"10px auto"}
//           boxShadow={"10px 10px 20px #ccc"}
//           width={"50%"}
//           justifyItems={"center"}
//           display={"flex"}
//           flexDirection={"column"}
//           marginTop={"10px"}
//         >
//           <Typography
//             variant="h4"
//             textAlign={"center"}
//             padding={3}
//             fontWeight={"Bold"}
//             color="darkblue"
//           >
//            Edit Blog
//           </Typography>
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontWeight: "bold", fontSize: "24px" }}
//           >
//             Title
//           </InputLabel>
//           <TextField
//             name="title"
//             value={inputs.title}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             fullWidth
//             required
//           />
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontWeight: "bold", fontSize: "24px" }}
//           >
//             Description
//           </InputLabel>
//           <TextField
//             name="description"
//             value={inputs.description}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             fullWidth
//             required
//           />
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontWeight: "bold", fontSize: "24px" }}
//           >
//             Image URL
//           </InputLabel>
//           <TextField
//             name="image"
//             value={inputs.image}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             fullWidth
//             required
//           />
//           <Button type="submit" color="warning" variant="contained">
//        Update
//           </Button>
//         </Box>
//       </form>
//     </>
//   )
// }

// export default EditBlog;

