import express from "express";
import { createPost } from "../controllers/post.controllers.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/").post(verifyJWT, upload.single("postImage"), createPost);

export default router;
