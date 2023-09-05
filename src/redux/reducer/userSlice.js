import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import UserService from "../service/authService";

const initialState = {
  name: "",
  email: "",
  errorMsg: null,
  sucessSingup: false,
  loading: false,

  loggedin: false,
  successlogin: false,
  loginError:null,
};
export const registerUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await UserService.registerUser(data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            const res = await UserService.loginUser(data);
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
      state.loggedin = true;
    },
  },
  extraReducers: {
    // register
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.sucessSingup = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      console.log("resolved");
      state.loading = false;
      state.errorMsg = null;
      state.sucessSingup = true;
      console.log(action.payload);
    },
    [registerUser.rejected]: (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.sucessSingup = false;
      state.errorMsg = action.payload;
      console.log(action.payload);
    },
    // login
    [loginUser.pending]: (state) => {
      state.loginError = null;
      state.loading = true;  
      state.successlogin = false;
    },
    [loginUser.rejected]: (state,action) => {
        console.log("login rejected");
        console.log(action.payload);
        state.loading = false;  
        state.loginError = action.payload;
    },
    [loginUser.fulfilled]: (state,action) => {
        localStorage.setItem("token", action.payload.token);
        state.loading = false;
        state.loginError = null;
        state.successlogin = true;
        setUser(state,action);
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
