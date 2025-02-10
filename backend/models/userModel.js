import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "userName is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    blog:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'blog',
      }
    ]
  },
  { timeStramp: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
