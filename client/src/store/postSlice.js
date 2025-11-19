import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    removePosts: (state, action) => {
      state.posts = [];
    },
  },
});

export default postSlice.reducer;
export const { addPost, addPosts, removePosts } = postSlice.actions;
