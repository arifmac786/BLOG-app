import Post from "../models/post.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

export const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const authorId = req.user._id;

  if (!title || !content) {
    throw new ApiError(400, "all fields required");
  }
  let postImageLocalPath;

  if (req.file && req.file.path) {
    postImageLocalPath = req.file.path;
  }

  const postImage = await uploadOnCloudinary(postImageLocalPath);
  if (!postImage) {
    throw new ApiError(400, "post must be required");
  }

  const createPost = await Post.create({
    title,
    content,
    postImage: postImage.url,
    author: authorId,
  });

  const post = await Post.findById(createPost._id).populate(
    "author",
    "name username email avatar"
  );
  if (!post) {
    throw new ApiError(401, "post did not create");
  }

  return res.status(201).json(new ApiResponse(201, "Post created", post));
});

export const getPost = asyncHandler(async (req, res) => {
  const postId = req.params.id;

  const post = await Post.findById(postId).populate(
    "author",
    "name email avatar username"
  );
  if (!post) {
    throw new ApiError(400, "post not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "get post successfully", post));
});
export const getPosts = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const post = await Post.find({ author: userId })
    .sort({ createdAt: -1 })
    .populate("author", "name email avatar username");
  if (!post) {
    throw new ApiError(400, "post not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "get post successfully", post));
});
