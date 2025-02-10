//responsive
import { Box, InputLabel, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const CreateBlog = () => {
  const id = localStorage.getItem("userId"); // Correctly retrieve userId
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id, // Use the correctly retrieved id
      });

      if (data?.success) {
        toast.success("Blog created successfully");
        navigate("/my-blogs");
      } else {
        alert("Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error.response?.data || error.message);
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
            Create Blog
          </Typography>
          
          {/* Title Field */}
          <InputLabel
            sx={{ mb: 1, mt: 2, fontWeight: "bold", fontSize: { xs: "16px", sm: "18px", md: "24px" } }}
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
          
          {/* Description Field */}
          <InputLabel
            sx={{ mb: 1, mt: 2, fontWeight: "bold", fontSize: { xs: "16px", sm: "18px", md: "24px" } }}
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
          
          {/* Image URL Field */}
          <InputLabel
            sx={{ mb: 1, mt: 2, fontWeight: "bold", fontSize: { xs: "16px", sm: "18px", md: "24px" } }}
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
          
          {/* Submit Button */}
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{
              marginTop: 2,
              padding: "12px",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateBlog;



// import { Box, InputLabel, Typography, TextField, Button } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';

// const CreateBlog = () => {
//   const id = localStorage.getItem("userId"); // Correctly retrieve userId
//   const navigate = useNavigate();

//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/api/v1/blog/create-blog", {
//         title: inputs.title,
//         description: inputs.description,
//         image: inputs.image,
//         user: id, // Use the correctly retrieved id
//       });

//       if (data?.success) {
//         toast.success("Blog created successfully");
//         navigate("/my-blogs");
//       } else {
//         alert("Failed to create blog");
//       }
//     } catch (error) {
//       console.error("Error creating blog:", error.response?.data || error.message);
//     }
//   };

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
//             Create Blog
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
//           <Button type="submit" color="primary" variant="contained">
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </>
//   );
// };

// export default CreateBlog;



// import { Box, InputLabel, Typography, TextField, Button } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const CreateBlog = () => {
//     const {id} = localStorage.getItem("userId");
//     const navigate = useNavigate();
//     const [inputs, setInputs] = useState({
//         title: "",
//         description: "",
//         image: "",
        
//     });
    

//     const handleChange = (e) =>{
//         setInputs((prevState) =>({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }))
//        }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//         const {data} = axios.post("/api/v1/blog/create-blog",{
//             title: inputs.title,
//             description: inputs.description,
//             image: inputs.image,
//             user: id,
//         })
//         if(data?.success){
//             alert("Blog created successfully");
//             navigate("/my-blogs")
//         }
//     } catch (error) {
        
//     }
//     console.log("inputs");
//   };

 
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Box
//           border={1}
//           borderRadius={5}
//           padding={2}
//           margin={"10px auto" }
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
//             Create Blog
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
// <InputLabel
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
//           <Button type="submit" color="primary" variant="contained"  >Submit</Button>
//         </Box>
//       </form>
//     </>
//   );
// };

// export default CreateBlog;
