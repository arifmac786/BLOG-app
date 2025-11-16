import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    throw new ApiError(401, "you are not logged in ");
  }

  const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
  const user = await User.findById(decoded._id).select("-password");
  if (!user) {
    throw new ApiError(401, "User not found");
  }
  req.user = user;
  next();
});
