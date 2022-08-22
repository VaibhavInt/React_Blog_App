import express from "express";
import {
  addBlog,
  getAllBlogs,
  updateBlog,
} from "../controllers/blog-controllers";
const blogRrouter = express.Router();

blogRrouter.get("/", getAllBlogs);
blogRrouter.post("/add", addBlog);
blogRrouter.put("/update/:id", updateBlog);

export default blogRrouter;
