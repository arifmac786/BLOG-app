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
