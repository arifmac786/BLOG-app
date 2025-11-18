import express from "express";
import {
  createPost,
  getPost,
  getPosts,
} from "../controllers/post.controllers.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/").post(verifyJWT, upload.single("postImage"), createPost);
router.route("/:id").get(verifyJWT, getPost);
router.route("/").get(verifyJWT, getPosts);

export default router;
