import express from "express";
import { signin, signout, signup } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);

// secure routes
router.route("/signout").post(verifyJWT, signout);

export default router;
