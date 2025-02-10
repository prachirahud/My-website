import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { BlogCard } from '../Components/BlogCard.js';
import { Grid, Typography } from '@mui/material';

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem('userId');
      if (!id) {
        console.error('User ID not found in localStorage');
        return;
      }

      const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
      console.log("API Response:", data);

      if (data?.success) {
        setBlogs(data.UserBlogs?.blogs || []); // Ensure blogs is an array
      } else {
        console.error('Failed to fetch blogs:', data?.message);
        setBlogs([]); // Set empty array if API response indicates failure
      }
    } catch (error) {
      console.error('Error fetching user blogs:', error.message);
      setBlogs([]); // Avoid rendering issues by ensuring blogs is an array
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mt: 2 }}>
        Your Blogs
      </Typography>
      {blogs && blogs.length > 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {blogs.map((blog) => (
            // <Grid item xs={12} sm={6} md={4} lg={3} key={blog._id}>
            <Grid item xs={12} sm={8} md={6} lg={4} key={blog._id}>
              <BlogCard
                id={blog._id} // Unique key for each blog
                isUser={true}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                username={blog.user?.username}
                time={blog.createdAt}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
          No blogs available
        </Typography>
      )}
    </div>
  );
};

export default UserBlogs;


// import { React, useState, useEffect } from 'react';
// import axios from 'axios';
// import { BlogCard } from '../Components/BlogCard.js'; 
// const UserBlogs = () => {
//   const [blogs, setBlogs] = useState([]);

//   const getUserBlogs = async () => {
//     try {
//       const id = localStorage.getItem('userId');
//       if (!id) {
//         console.error('User ID not found in localStorage');
//         return;
//       }
  
//       const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
//       console.log("API Response:", data);
  
//       if (data?.success) {
//         setBlogs(data.UserBlogs?.blogs || []); // Ensure blogs is an array
//       } else {
//         console.error('Failed to fetch blogs:', data?.message);
//         setBlogs([]); // Set empty array if API response indicates failure
//       }
//     } catch (error) {
//       console.error('Error fetching user blogs:', error.message);
//       setBlogs([]); // Avoid rendering issues by ensuring blogs is an array
//     }
//   };
  
//   useEffect(() => {
//     getUserBlogs();
//   }, []);

//   return (
//     <div>
//       {blogs && blogs.length > 0 ? (
//         blogs.map((blog) => (
//           <BlogCard
//             key={blog._id} // Unique key for each blog
//             id={blog._id}
//             isUser={true}
//             title={blog.title}
//             description={blog.description}
//             image={blog.image}
//             username={blog.user?.username}
//             time={blog.createdAt}
//           />
//         ))
        
//       ) : (
//         <p>No blogs available</p>
//       )
//       }
//     </div>
//   );
// };

// export default UserBlogs;

        // blogs.map((blog) => (
        //   <BlogCard
        //   id = {blog._id}
        //   isUser={true}
        //     title={blog.title}
        //     description={blog.description}
        //     image={blog.image}
        //     username={blog.user?.username}
        //     time={blog.createdAt}
        //   />
        // ))
    



// import {React, useState, useEffect} from 'react';
// import axios from 'axios';
// import { BlogCard } from '../Componrnts/BlogCard';


// const UserBlogs = () => {
// const [blogs, setBlogs] = useState([]);

// //get my blogs
//   const getUserBlogs = async () =>{
//   try {
//     const id = localStorage.getItem('userId');
//     const {data} = await axios.get(`/api/v1/blog/user-blog/${id}`)
//     if(data?.success){
//       setBlogs(data?.UserBlogs.blogs)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };

// useEffect(() =>{
//   getUserBlogs();
// }, []);
// console.log(blogs);
// return (
//   <div>
//     {blogs && blogs.length > 0 ? (
//       blogs.map((blog) => (
//         <BlogCard
//           key={blog._id} // Ensure you add a unique key for each BlogCard
//           title={blog.title}
//           description={blog.description}
//           image={blog.image}
//           username={blog.user.username}
//           time={blog.createdAt}
//         />
//       ))
//     ) : (
//       <p>No blogs available</p>
//     )}
//   </div>
// );
// };

// export default UserBlogs;


