import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: undefined,
  },
  reducers: {
    addUserDetails: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { addUserDetails } = userSlice.actions;
export default userSlice.reducer;
