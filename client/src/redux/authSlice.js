import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: false,
    authUser: null,
  },
  reducers: {
    setAuthUser(state, action) {
      state.authUser = action.payload;
      state.status = true;
    },
  },
});

export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
