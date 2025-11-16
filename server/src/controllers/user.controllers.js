import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const signup = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }
  const existUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existUser) {
    throw new ApiError(401, "user already exists with this email/username");
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
  });

  const data = await User.findById(user._id).select("-password");
  const token = data.generateAuthToken();
  console.log(token);

  return res
    .status(201)
    .cookie("token", token, { httpOnly: true })
    .json(new ApiResponse(201, "user register successfully", { data, token }));
});

export const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "User does not exist");
  }

  const comparePassword = await user.comparePassword(password);
  if (!comparePassword) {
    throw new ApiError(400, "Invalid Password");
  }
  const data = await User.findById(user._id).select("-password");
  const token = data.generateAuthToken();

  return res
    .status(200)
    .cookie("token", token, { httpOnly: true })
    .json(new ApiResponse(200, "user login successfully", { data, token }));
});

export const signout = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(req.user);
  if (!user) {
    throw new ApiError(401, "User not found");
  }

  return res
    .status(200)
    .clearCookie("token", { httpOnly: true })
    .json(new ApiResponse(200, "user logout successfully ", {}));
});
