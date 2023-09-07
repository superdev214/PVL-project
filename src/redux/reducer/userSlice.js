import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import UserService from "../service/authService";
import AdminService from "../service/adminService";
import AddcartService from "../service/addcartService";
const initialState = {
  name: "",
  email: "",
  errorMsg: null,
  loginError: null,
  addAccountError: null,
  addCartError: null,
  sucessSingup: false,
  loading: false,
  loggedin: false,
  addcarts:[],
  totalPrice: 0,

  adminPermission: false,
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
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async () => {
    try {
      const res = await UserService.getCurrentUser();
      return res.data;
    } catch (error) {}
  }
);
// add account - admin service
export const addAccount = createAsyncThunk(
  "user/addAccount",
  async (data, { rejectWithValue }) => {
    try {
      const res = await AdminService.addAccount(data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// add account to carts - addcart service
export const addAccountToCart = createAsyncThunk(
  "user/addAccountToCart",
  async (data, { rejectWithValue }) => {
    try {
      const res = await AddcartService.addAccountToCart(data);
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
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.errorMsg = null;
      state.sucessSingup = false;
      state.loading = false;
      state.loggedin = false;
      state.loginError = null;
      state.addcarts=[];
      state.addCartError = null,
      state.totalPrice = 0;
      state.adminPermission = false;
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
  extraReducers: {
    // get current user
    [getCurrentUser.pending]: (state) => {},
    [getCurrentUser.fulfilled]: (state, action) => {
      if (action.payload) {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.loggedin = true;
      } else state.loggedin = false;
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.loggedin = false;
    },
    // register
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.sucessSingup = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.errorMsg = null;
      state.sucessSingup = true;
    },
    [registerUser.rejected]: (state, action) => {

      state.loading = false;
      state.sucessSingup = false;
      state.errorMsg = action.payload;
    
    },
    // login
    [loginUser.pending]: (state) => {
      state.loginError = null;
      state.loading = true;
      state.loggedin = false;
      state.adminPermission = false;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.loginError = action.payload;
      state.adminPermission = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload.msg === "Admin success") state.adminPermission = true;
      localStorage.setItem("token", action.payload.token);
      state.loading = false;
      state.loginError = null;
      state.loggedin = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    // add account by admin
    [addAccount.pending] : (state) => {
      state.addAccountError = null;
    },
    [addAccount.fulfilled]: (state,action) => {
      state.addAccountError = "success";
    },
    [addAccount.rejected]: (state,action) => {
      console.log("Rejected : add account ");
      console.log(action.payload);
      state.addAccountError = action.payload;
    },
    // add account to carts by user
    [addAccountToCart.pending] : (state) => {
      state.addCartError = "";
    },
    [addAccountToCart.fulfilled] : (state, action) => {
      console.log("success");
      console.log(action.payload);
      state.totalPrice = action.payload.total_price;
      state.addCartError = action.payload.message;
    },
    [addAccountToCart.rejected] : (state, action) => {
      console.log("rejected:add Account to cart ");
      state.addCartError = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
