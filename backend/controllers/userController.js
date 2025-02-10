import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs"
// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      userCount : users.length,
      success:true,
      message:"All users data",
      users,
    })

  } catch (error) {
console.log(error)
return res.status(500).send({
  success:false,
  message:"Error in getting All users",
  error,
}) 
  }
};


// Create user register
export const registerController = async (req, res) => {
  try {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    

    const { username, email, password } = req.body || {};

    // Validation
    if (!username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "User already exists",
      });
    }

const hashPassword = await bcrypt.hash(password, 10)

    // Save new user
    const user = await new userModel({ username, email, password:hashPassword}).save();
    return res.status(201).send({
      success: true,
      message: "New user created",
      user,
    });

  } catch (error) {
    console.error("Error in registerController:", error);
    return res.status(500).send({
      success: false,
      message: "Error in register callback",
      error: error.message,  // Send only the error message
    });
  }
};



// // Login
// Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the fields.",
      });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials.",
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials.",
      });
    }

    // Success response
    return res.status(200).send({
      success: true,
      message: "Login successful.",
      user, // Send only safe user details (e.g., omit password)
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({
      success: false,
      message: "Failed to login. Please try again later.",
    });
  }
};

// export const loginController = async (req, res) => {
//   try {
//     const {email, password} = req.body

//     //validation
// if(!email || !password){
//   return res.status(400).send({
//     success:false,
//     message:"Please fill all the fields",
//   })
// }
//  // check the credentials
// const user = await userModel.findOne({email})
//   if(!user){
// return res.status(401).send({
//   success:false,
//   message:"Invalid email",
// })
//   }
// // password
// const isMatch = await bcrypt.compare(password, user.password)
// if(!isMatch){
//   return res.status(400).send({
//     success:false,
//     message:"Invalid Email or password"
//   })
 
// }
// return res.status(200).send({
//   success:true,
//   message:"Login succesful",
//   user
// })
//   } catch (error) {
//     console.log(error)
//     return res.status(400).send({
//       success:false,
//       message:"Failed to login",
//       error,
//     })
//   }
// };
