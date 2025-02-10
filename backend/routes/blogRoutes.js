import express from 'express';

import { createBlogController, deleteBlogByIdController, getAllBlogsController, getBlogById, getBlogByIdController, updateBlogByIdController, userBlogController } from '../controllers/blogController.js';
 
const router = express.Router();

//routes
//get all blogs
router.get('/all-blogs', getAllBlogsController)

//get single blog
router.get('/get-blog/:id', getBlogByIdController)

//create blog
router.post('/create-blog', createBlogController);

//update blog
router.put('/update-blog/:id', updateBlogByIdController)

//delete blog
router.delete('/delete-blog/:id', deleteBlogByIdController)

//Get user blog

router.get('/user-blog/:id', userBlogController)

router.get("/blog/${id}", getBlogById);
router.get("/:id", getBlogById);
export default router;
