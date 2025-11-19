import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

const userProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profile = action.payload;
    },
    removeProfile: (state, action) => {
      state.profile = null;
    },
  },
});

export const { addProfile, removeProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
