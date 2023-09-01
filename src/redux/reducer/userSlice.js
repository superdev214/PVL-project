import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import UserService from "../service/authService";

const initialState = {
  name: "",
  email: "",
  errorMsg: null,
  loading: false,
};
export const registerUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await UserService.registerUser(data);
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      console.log("resolved");
      state.loading = false;
      console.log(action.payload);
    },
    [registerUser.rejected]: (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.errorMsg = action.payload;
      console.log(action.payload);
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
