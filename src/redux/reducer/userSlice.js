import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import UserService from "../service/authService";
import AdminService from "../service/adminService";
import AddcartService from "../service/addcartService";
import SendAccountInfoService from "../service/sendAccountInfoService";
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
  addcarts: [],
  totalPrice: 0,

  pendingLoggin: false,
  pendingSignup: false,
  pendingAddAccount: false,

  adminPermission: false,

  accountInfoMsg: null,
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
// get all cart - addcart serviec - current user - me
export const getAllCart = createAsyncThunk(
  "user/getAllCart",
  async (data, { rejectWithValue }) => {
    try {
      const res = await AddcartService.getAllCartbyUser(data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// send account info by email to user
export const sendAccountInfo = createAsyncThunk(
  "user/sendAccountInfo",
  async (data, { rejectWithValue }) => {
    try {
      const res = await SendAccountInfoService.sendAccountByEmail(data);
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
      state.addcarts = [];
      state.addCartError = null;
      state.totalPrice = 0;
      state.adminPermission = false;
      state.accountInfoMsg = null;

      state.pendingLoggin = false;
      state.pendingSignup = false;
      state.pendingAddAccount = false;
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setFormatAccountInfoMsg: (state) => {
      state.accountInfoMsg = null;
    },
  },
  extraReducers: {
    // get current user
    [getCurrentUser.pending]: (state) => {},
    [getCurrentUser.fulfilled]: (state, action) => {
      if (action.payload) {
        state.name = action.payload.name;
        state.email = action.payload.email;
        if (state.name === "admin") state.adminPermission = true;
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
      state.pendingSignup = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.errorMsg = null;
      state.sucessSingup = true;
      state.pendingSignup = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.sucessSingup = false;
      state.errorMsg = action.payload;
      state.pendingSignup = false;

    },
    // login
    [loginUser.pending]: (state) => {
      state.loginError = null;
      state.loading = true;
      state.loggedin = false;
      state.adminPermission = false;
      state.pendingLoggin = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.loginError = action.payload;
      state.adminPermission = false;
      state.pendingLoggin = false;

    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload.msg === "Admin success") state.adminPermission = true;
      localStorage.setItem("token", action.payload.token);
      state.loading = false;
      state.loginError = null;
      state.loggedin = true;
      state.pendingLoggin = false;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    // add account by admin
    [addAccount.pending]: (state) => {
      state.addAccountError = null;
      state.pendingAddAccount = true;
    },
    [addAccount.fulfilled]: (state, action) => {
      state.addAccountError = "success";
      state.pendingAddAccount = false;

    },
    [addAccount.rejected]: (state, action) => {
      console.log("Rejected : add account ");
      console.log(action.payload);
      state.addAccountError = action.payload;
      state.pendingAddAccount = false;
    },
    // add account to carts by user
    [addAccountToCart.pending]: (state) => {
      state.addCartError = "";
    },
    [addAccountToCart.fulfilled]: (state, action) => {
      console.log("success");
      console.log(action.payload);
      state.totalPrice = action.payload.total_price;
      state.addCartError = action.payload.message;
    },
    [addAccountToCart.rejected]: (state, action) => {
      console.log("rejected:add Account to cart ");
      state.addCartError = action.payload;
    },
    // get all cart by current user
    [getAllCart.pending]: (state) => {
      console.log("pending");
    },
    [getAllCart.fulfilled]: (state, action) => {
      console.log("success get all carts");
      console.log(action.payload);
      state.addcarts = action.payload.addcart;
      state.totalPrice = action.payload.totalPrice;
    },
    [getAllCart.rejected]: (state, action) => {
      console.log("rejected get all carts");
    },
    [sendAccountInfo.pending]: (state) => {
      console.log("email pending");
      state.accountInfoMsg = "pending";
    },
    [sendAccountInfo.fulfilled]: (state, action) => {
      console.log("email fulfiled");
      console.log(action.payload);
      state.accountInfoMsg = action.payload.msg;
      // state.addcarts = action.payload.addcart;
    },
    [sendAccountInfo.rejected]: (state, action) => {
      console.log("email rejected");

      state.accountInfoMsg = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser ,setFormatAccountInfoMsg} = userSlice.actions;
