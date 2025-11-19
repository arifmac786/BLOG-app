import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

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

  const localFilePath = req.file?.path;

  const avatar = await uploadOnCloudinary(localFilePath);
  console.log(avatar);
  if (!avatar) {
    throw new ApiError(400, "avatar uploading ERROR");
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
    avatar: avatar?.secure_url,
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

export const getUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, "user fetched succesfully", req.user));
});

export const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user?._id;

  const UserProfile = await User.aggregate([
    {
      $match: {
        _id: userId,
      },
    },
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "author",
        as: "postDetails",
      },
    },
    {
      $addFields: {
        totalPost: {
          $size: "$postDetails",
        },
      },
    },
    {
      $project: {
        name: 1,
        email: 1,
        username: 1,
        avatar: 1,
        postDetails: 1,
        totalPost: 1,
      },
    },
  ]);

  console.log(UserProfile);

  if (!UserProfile?.length) {
    throw new ApiError(400, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Fetched user profile", UserProfile));
});
