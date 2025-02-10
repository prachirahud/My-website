import mongoose from "mongoose";
import blogModel from "../models/blogModel.js";
import userModel from "../models/userModel.js";
import Blog from "../models/blogModel.js";
//Get all blogs
export const getAllBlogsController = async (req, res) =>{
    try {
        const blog = await blogModel.find({}).populate("user");
        if(!blog){
            return res.status(200).send({
                success:false,
                message:'No blogs found',
            })
        }
        return res.status(200).send({
            success:true,
            blogCount:blog.length,
            message:"All blogs list",
            blog,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error while getting blogs',
            error
        })
    }
}

//get single blog
export const getBlogByIdController = async (req, res) => {
  try {
    const {id} = req.params
    const blog = await blogModel.findById(id)
    if(!blog){
      return res.status(400).send({
        success:false,
        message:"Blog not found with this id",
      })
    }
    return res.status(200).send({
      success:true,
      message:"This is a blog",
      blog,
    })
  } catch (error) {
    console.log(error)
    return res.status(400).send({
      success:false,
      message:"Error occures",
      error,
    })
    
  }
}

//create blog
export const createBlogController = async (req, res) => {
  try {
      console.log("Request Body:", req.body);

      // Destructure request body
      const { title, description, image, user } = req.body;

      // Validation
      if (!title || !description || !image || !user) {
          return res.status(400).send({
              success: false,
              message: 'All fields are required',
          });
      }

      // Validate the user field
      if (!mongoose.Types.ObjectId.isValid(user)) {
          return res.status(400).send({
              success: false,
              message: 'Invalid user ID',
          });
      }

      const existingUser = await userModel.findById(user);

      // Validation: Check if the user exists
      if (!existingUser) {
          return res.status(400).send({
              success: false,
              message: 'Unable to find user',
          });
      }

      // Create a new blog
      const newBlog = new blogModel({ title, description, image, user });

      const session = await mongoose.startSession();
      session.startTransaction();

      await newBlog.save({ session });

      // Push only the ObjectId of the new blog
      existingUser.blog.push(newBlog._id);

      await existingUser.save({ session });

      await session.commitTransaction();

      // Success response
      return res.status(200).send({
          success: true,
          message: 'Blog created successfully',
          newBlog,
      });

  } catch (error) {
      console.error(error);

      // Error response
      return res.status(500).send({
          success: false,
          message: 'Error while creating blog',
          error: error.message,
      });
  }
};




// export const createBlogController = async (req, res) => {
//   try {
//     console.log("Request Body:", req.body);

//     // Destructure request body
//     const { title, description, image, user } = req.body;

//     // Validation
//     if (!title || !description || !image || !user) {
//       return res.status(400).send({
//         success: false,
//         message: 'All fields are required',
//       });
//     }

//     // Validate the user field
//     if (!mongoose.Types.ObjectId.isValid(user)) {
//       return res.status(400).send({
//         success: false,
//         message: 'Invalid user ID',
//       });
//     }

//     // Check if the user exists
//     const existingUser = await userModel.findById(user);
//     if (!existingUser) {
//       return res.status(404).send({
//         success: false,
//         message: 'User not found',
//       });
//     }

//     // Create a new blog
//     const newBlog = new blogModel({ title, description, image, user });

//     // Start a transaction
//     const session = await mongoose.startSession();
//     session.startTransaction();

//     try {
//       await newBlog.save({ session });
//       existingUser.blog.push(newBlog._id); // Push the blog ID to user's blog array
//       await existingUser.save({ session });
//       await session.commitTransaction();
//     } catch (transactionError) {
//       await session.abortTransaction();
//       throw transactionError;
//     } finally {
//       session.endSession();
//     }

//     // Success response
//     return res.status(200).send({
//       success: true,
//       message: 'Blog created successfully',
//       newBlog,
//     });
//   } catch (error) {
//     console.error(error);

//     // Error response
//     return res.status(500).send({
//       success: false,
//       message: 'Error while creating blog',
//       error: error.message,
//     });
//   }
// };



// export const createBlogController = async (req, res) => {
//     try
//      {console.log("Request Body:", req.body);
      
//       // Destructure request body
//       const { title, description, image, user } = req.body;
  
//       // Validation
//       if (!title || !description || !image || !user) {
//         return res.status(400).send({
//           success: false,
//           message: 'All fields are required',
//         });
//       }
  
//  // Validate the user field
//  if (!mongoose.Types.ObjectId.isValid(user)) {
//   return res.status(400).send({
//     success: false,
//     message: 'Invalid user ID',
//   });
// }

// const existingUser = await userModel.findById(user)

// //validation 
// if(!existingUser){
//   return res.status(400).send({
//     success:false,
//     message:'unable to find user'
//   })
// }


//       // Create a new blog
//       const newBlog = new blogModel({ title, description, image, user });
    
//       const session = await mongoose.startSession();
//       session.startTransaction();
//       await newBlog.save({session});
//       existingUser.blog.push({newBlog});
//       await existingUser.save({session});
//       await session.commitTransaction();
//       await newBlog.save();
  
//       // Success response
//       return res.status(200).send({
//         success: true,
//         message: 'Blog created successfully',
//         newBlog,
//       });
  
//     } catch (error) {
//       console.error(error);
  
//       // Error response
//       return res.status(500).send({
//         success: false,
//         message: 'Error while creating blog',
//         error: error.message,
//       });
//     }
//   };
  

//update blog
export const updateBlogByIdController = async (req, res) => {
  console.log("Request received with params:", req.params);
  console.log("Request body:", req.body);

  try {
    const { id } = req.params;
    console.log("Updating blog with ID:", id);

    const { title, description, image } = req.body;

    if (!title || !description || !image) {
      console.log("Validation failed");
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    const blog = await blogModel.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );

    if (!blog) {
      console.log("Blog not found");
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    console.log("Blog updated:", blog);
    return res.status(200).send({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Error while updating blog:", error.message);
    return res.status(500).send({
      success: false,
      message: "Error while updating blog",
      error: error.message,
    });
  }
};


//delete blog
export const deleteBlogByIdController = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from params

    // Trim and validate the ID
    const trimmedId = id.trim(); // Remove any extra spaces or newlines
    if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
      return res.status(400).send({
        success: false,
        message: "Invalid blog ID format",
      });
    }

    // Delete the blog
    const blog = await blogModel.findByIdAndDelete(trimmedId);

    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog with this ID not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Blog has been deleted successfully",
    });
  } catch (error) {
    console.error("Error while deleting blog:", error.message);

    return res.status(500).send({
      success: false,
      message: "Error while deleting blog",
      error: error.message,
    });
  }
};

// export const deleteBlogByIdController = async (req, res) => {
//   try {
// const {id} = req.params
//     // Deleting the blog
//      await blogModel.findByIdAndUpdate(id);


//     // Success response
//     return res.status(200).send({
//       success: true,
//       message: "Blog has been deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error while deleting blog:", error.message);

//     // Error response
//     return res.status(500).send({
//       success: false,
//       message: "Error while deleting blog",
//       error: error.message,
//     });
//   }
// };
export const userBlogController = async (req, res) =>{
  try {
    const userId = req.params.id;
    const userBlogs = await blogModel.find({ user: userId }).populate('user');

    if (!userBlogs.length) {
      return res.status(404).json({
        success: false,
        message: 'No blogs found for this user',
      });
    }

    return res.status(200).json({
      success: true,
      UserBlogs: { blogs: userBlogs },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message,
    });
  }
};


export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid Blog ID" });
    }

    // Find the blog by ID and populate user field if exists
    // const blog = await Blog.findById(id).populate("user");
const blog = await Blog.findById(id).populate("user", "username");
    // If blog is not found
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    // Return the blog if found
    res.status(200).json({ success: true, blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


// export const getBlogById = async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ success: false, message: "Invalid Blog ID" });
//     }

//     const blog = await Blog.findById(id).populate("user");

//     if (!blog) {
//       return res.status(404).json({ success: false, message: "Blog not found" });
//     }

//     res.status(200).json({ success: true, blog });
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };

//   try {
//     const { id } = req.params;
//     console.log("Requested Blog ID:", id);

//     const blog = await Blog.findById(id).populate("user");
//     if (!blog) {
//       return res.status(404).json({ success: false, message: "Blog not found" });
//     }

//     res.status(200).json({ success: true, blog });
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };

