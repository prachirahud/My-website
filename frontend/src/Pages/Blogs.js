import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlogCard } from "../Components/BlogCard.js";
import { Link } from "react-router-dom";
import { CircularProgress, Container, Typography, Grid } from "@mui/material";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/all-blogs`);
      if (data?.success) {
        setBlogs(data?.blog);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress size={50} />
      </div>
    );
  }

  return (
    <Container maxWidth="lg" className="mt-10">
      <Typography variant="h4" className="text-center font-bold text-blue-700 mb-6">
        Latest Blogs
      </Typography>

      {blogs.length === 0 ? (
        <Typography variant="h6" className="text-center text-gray-500">
          No blogs available.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            // <Grid item xs={12} sm={6} md={4} key={blog?._id}>
            <Grid item xs={12} sm={8} md={6} lg={4} key={blog._id}>
              <Link to={`/blog/${blog?._id}`} className="no-underline">
                <BlogCard
                  id={blog?._id}
                  title={blog?.title}
                  description={blog?.description}
                  image={blog?.image}
                  username={blog?.user?.username}
                  time={new Date(blog?.createdAt).toLocaleDateString()}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Blogs;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BlogCard } from "../Components/BlogCard.js";
// import { Link } from 'react-router-dom';
// import { CircularProgress, Alert } from '@mui/material';  // Added CircularProgress for loading and Alert for error handling

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);  // Loading state for the request
//   const [error, setError] = useState("");  // Error state for displaying errors

//   const getAllBlogs = async () => {
//     try {
//       setLoading(true);  // Start loading
//       const { data } = await axios.get(`/api/v1/blog/all-blogs`);
//       if (data?.success) {
//         setBlogs(data?.blog); // Set blogs data
//         setError("");  // Clear any previous errors
//       } else {
//         setError("Failed to load blogs.");
//       }
//     } catch (error) {
//       setError("Error fetching blogs. Please try again later.");
//       console.log(error);
//     } finally {
//       setLoading(false);  // Stop loading when the request is complete
//     }
//   };

//   useEffect(() => {
//     getAllBlogs(); // Fetch all blogs when the component is mounted
//   }, []);

//   if (loading) {
//     return <CircularProgress />;  // Show loading spinner while waiting for data
//   }

//   return (
//     <div>
//       {error && <Alert severity="error">{error}</Alert>}  
//       {blogs.length > 0 ? (
//         blogs.map((blog) => (
//           <Link to={`/blog/${blog?._id}`} key={blog?._id}> {/* Navigate to blog details */}
//             <BlogCard
//               id={blog?._id}
//               title={blog?.title}
//               description={blog?.description}
//               image={blog?.image}
//               username={blog?.user.username}
//               time={blog?.createdAt}
//             />
//           </Link>
//         ))
//       ) : (
//         <p>No blogs found</p>  // Display a message if no blogs are available
//       )}
//     </div>
//   );
// };

// export default Blogs;



// Blogs.js (Blog List Page)
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BlogCard } from "../Components/BlogCard.js";
// import { Link } from 'react-router-dom';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);

//   const getAllBlogs = async () => {
//     try {
//       const { data } = await axios.get(`/api/v1/blog/all-blogs`);
//       if (data?.success) {
//         setBlogs(data?.blog); // Set blogs data
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllBlogs(); // Fetch all blogs when the component is mounted
//   }, []);

//   return (
//     <>
//       {blogs &&
//         blogs.map((blog) => (
//           <Link to={`/blog/${blog?._id}`} key={blog?._id}> {/* Navigate to blog details */}
//             <BlogCard
//               id={blog?._id}
//               title={blog?.title}
//               description={blog?.description}
//               image={blog?.image}
//               username={blog?.user.username}
//               time={blog?.createdAt}
//             />
//           </Link>
//         ))}
//     </>
//   );
// };

// export default Blogs;

