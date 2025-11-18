import mongoose from "mongoose";

const postSchema = new mongoose.connect(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    postImage: {
      type: String,
      required,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
