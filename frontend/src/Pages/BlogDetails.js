
//responsive
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Container, Typography, Card, CardMedia, CardContent } from "@mui/material";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null); // Blog state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`/api/v1/blog/${id}`);
        if (data?.success) {
          setBlog(data.blog);
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress size={50} />
      </div>
    );
  }

  if (!blog) return <p className="text-center text-red-500">Blog not found.</p>;

  return (
    <Container maxWidth="md" className="mt-10 p-6 shadow-md rounded-lg bg-white">
      <Card className="shadow-lg rounded-lg">
        {/* Blog Image */}
        

        {/* Blog Content */}
        <CardContent>
          <Typography variant="h4" className="font-bold text-blue-700 margin-10">
            {blog.title}
          </Typography>
          {blog.image ? (
          <CardMedia
            component="img"
            image={blog.image}
            alt={blog.title}
            className="w-full max-h-[400px] object-cover"
          />
        ) : (
          <p className="text-center text-gray-500 py-4">No image available</p>
        )}
        <br />
        <br />
          <Typography variant="body1" className="mt-3 text-gray-700 leading-relaxed">
            {blog.description || "Content not available"}
          </Typography>
          <Typography variant="body2" className="mt-5 text-gray-500">
            Author: {blog.user?.username || "Unknown"}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Created at: {new Date(blog.createdAt).toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogDetails;



// // BlogDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BlogDetails = () => {
//   const { id } = useParams(); // Get the blog ID from the URL
//   const [blog, setBlog] = useState(null); // Start with null state to handle loading

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const { data } = await axios.get(`/api/v1/blog/${id}`);
//         if (data?.success) {
//           setBlog(data.blog); // Set the full blog data
//         } else {
//           console.error("Blog not found");
//         }
//       } catch (error) {
//         console.error("Error fetching blog details:", error);
//       }
//     };

//     fetchBlog(); // Fetch blog details when the component is mounted or ID changes
//   }, [id]);

//   if (!blog) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{blog?.title}</h2>
//       <p>{blog?.description}</p>
//       {blog?.image ? <img src={blog.image} alt={blog.title} /> : <p>No image available</p>}
//       <p>{blog?.content || "Content not available"}</p> {/* Assuming you have a content field */}
//       <p>Author: {blog?.user?.username || "Unknown"}</p>
//       <p>Created at: {new Date(blog?.createdAt).toLocaleString()}</p>
//     </div>
//   );
// };

// export default BlogDetails;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//   const { id } = useParams(); // Get blog ID from URL
//   const [blog, setBlog] = useState(null); // Start with null state to manage loading

//   useEffect(() => {
//     const fetchBlog = async () => {
//       console.log("Fetching blog with ID:", id); // Debugging

//       try {
//         const { data } = await axios.get(`http://localhost:3000/api/v1/blog/${id}`);
//         console.log("API Response:", data); // Debugging
//         setBlog(data);
//         if (data?.success) {
//           setBlog(data.blog); // Set blog data if successful
//         } else {
//           console.error("Blog not found or failed response");
//         }
//       } catch (error) {
//         console.error("Error fetching blog details:", error);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   // Handle loading state
//   if (!blog) {
//     return <p>Loading...</p>;
//   }

//   // Render blog details only when blog data is available
//   return (
//     <div>
//       <h2>{blog?.title || "No title available"}</h2>
//       <p>{blog?.description || "No description available"}</p>
//       {blog?.image ? (
//         <img src={blog.image} alt={blog.title} />
//       ) : (
//         <p>No image available</p>
//       )}
//       <p>Author: {blog?.user?.username || "Unknown"}</p>
//     </div>
//   );
// };

// export default BlogDetails;




