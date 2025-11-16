import express from "express";
import {
  getUser,
  signin,
  signout,
  signup,
} from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/signup").post(upload.single("avatar"), signup);
router.route("/signin").post(signin);

// secure routes
router.route("/signout").post(verifyJWT, signout);
router.route("/").get(verifyJWT, getUser);

export default router;
