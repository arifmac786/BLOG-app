import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const formData = new FormData();

  formData.append("title", title);
  formData.append("content", content);
  formData.append("postImage", image);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:5000/api/post", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "/multipart-formdata",
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setTitle("");
        setContent("");
        setImage(null);
        setPreview(null);
      })
      .catch((err) => {
        console.log("POst ERROR", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>

      <div className="flex flex-col gap-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Enter post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded"
        />

        {/* Content */}
        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-3 rounded h-40"
        ></textarea>

        {/* Image Upload */}
        <input type="file" onChange={handleImage} />

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            className="w-full h-60 object-cover rounded border"
          />
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="px-6 cursor-pointer mt-6 py-3 rounded-xl font-semibold text-white 
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  hover:opacity-90 transition-all duration-200 shadow-lg"
        >
          {loading ? <ClipLoader size={25} color="white" /> : "Public Post"}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
