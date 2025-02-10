//responsive
import React from "react";
import { Box, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { useMediaQuery } from "@mui/material";

export const BlogCard = ({
  title,
  description,
  image,
  username,
  time,
  id,
  userId, // Blog's owner ID
  loggedInUserId, // Logged-in user's ID
}) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Check for small screens

  const handleEdit = () => {
    navigate(`/edit-blog/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        toast.success("Blog deleted successfully");
        window.location.reload();
        navigate("/my-blogs");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Check if we're on the blog list page (Blogs.js) by looking at the parent component or URL
  const isBlogPage = window.location.pathname.includes("/blog"); // Check if on BlogDetails page

  return (
    <Card
      sx={{
        // width: isSmallScreen ? "100%" : "40%", // Full width on small screens, 40% on larger
        width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        transition: "all 0.3s ease",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {/* Only render icons if it's the blog list page and the logged-in user is the blog's owner */}
      {!isBlogPage && loggedInUserId === userId && (
        <Box display="flex" flexDirection="row">
          <IconButton
            onClick={handleEdit}
            sx={{ marginLeft: "auto", color: "rgb(17, 98, 228)" }}
            aria-label="edit"
          >
            <ModeEditIcon fontSize="medium" />
          </IconButton>
          <IconButton
            onClick={handleDelete}
            sx={{ color: "rgb(251, 58, 36)" }}
            aria-label="delete"
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
        </Box>
      )}

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[200] }} aria-label="user-avatar">
            {username ? username.charAt(0).toUpperCase() : "U"}
          </Avatar>
        }
        title={username}
        subheader={time}
      />
      <CardMedia
        component="img"
        height={isSmallScreen ? "250" : "194"} // Larger height for small screens
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }} // Ensures image fits well
      />
      <CardContent>
        <Typography variant="h6" component="div">
          Title: {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Description: {description}
        </Typography>
      </CardContent>
    </Card>
  );
};


// import React from "react";
// import { Box, IconButton } from "@mui/material";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from 'react-hot-toast';
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Avatar from "@mui/material/Avatar";
// import { red } from "@mui/material/colors";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";

// export const BlogCard = ({
//   title,
//   description,
//   image,
//   username,
//   time,
//   id,
//   userId, // Blog's owner ID
//   loggedInUserId, // Logged-in user's ID
// }) => {
//   const navigate = useNavigate();

//   const handleEdit = () => {
//     navigate(`/edit-blog/${id}`);
//   };

//   const handleDelete = async () => {
//     try {
//       const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
//       if (data?.success) {
//         toast.success("Blog deleted successfully");
//         window.location.reload();
//         navigate("/my-blogs");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Check if we're on the blog list page (Blogs.js) by looking at the parent component or URL
//   const isBlogPage = window.location.pathname.includes('/blog'); // Check if on BlogDetails page

//   return (
//     <Card
//       sx={{
//         width: "40%",
//         margin: "auto",
//         mt: 2,
//         padding: 2,
//         boxShadow: "5px 5px 10px #ccc",
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       {/* Only render icons if it's the blog list page and the logged-in user is the blog's owner */}
//       {!isBlogPage && loggedInUserId === userId && ( 
//         <Box display={"flex"} flexDirection={"row"} >
//           <IconButton onClick={handleEdit} sx={{ marginLeft: "auto", color: "rgb(17, 98, 228)" }} aria-label="edit">
//             <ModeEditIcon fontSize="medium" />
//           </IconButton>
//           <IconButton onClick={handleDelete} sx={{ color: "rgb(251, 58, 36)" }} aria-label="delete">
//             <DeleteIcon fontSize="medium" />
//           </IconButton>
//         </Box>
//       )}

//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[200] }} aria-label="user-avatar">
//             {username ? username.charAt(0).toUpperCase() : "U"}
//           </Avatar>
//         }
//         title={username}
//         subheader={time}
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={image}
//         alt={title}
//       />
//       <CardContent>
//         <Typography variant="h6" component="div">
//           Title: {title}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           Description: {description}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };


