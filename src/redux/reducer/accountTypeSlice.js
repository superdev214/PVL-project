import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AccountTypeService from "../service/accountTypeService";

const initialState = {
  accountTypeList: [],
  errorMsg: null,
};
export const registerAccountType = createAsyncThunk(
  "accountType/register",
  async (data, { rejectWithValue }) => {
    try {
      console.log("register start type");
      const res = await AccountTypeService.registerAccountType(data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteAccountType = createAsyncThunk(
  "accountType/delete",
  async (data, { rejectWithValue }) => {
    try {
      const res = await AccountTypeService.deleteAccountType(data);
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAllAccountType = createAsyncThunk(
  "accountType/getAllAccountType",
  async () => {
    try {
      console.log("get all account types******");
      const res = await AccountTypeService.getAllAccountType();
      console.log(res);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const accountTypeSlice = createSlice({
  initialState,
  name: "accountTypeSlice",
  reducers: {
    setFormat: (state, action) => {
      state.i = [];
    },
  },
  extraReducers: {
    [registerAccountType.pending]: (state) => {
        state.errorMsg = "";
    },
    [registerAccountType.fulfilled]: (state, action) => {
      state.errorMsg = "success";
      state.accountTypeList.push(action.payload);
    },
    [registerAccountType.rejected]: (state, action) => {
      console.log("rejected");
      state.errorMsg = action.payload;
    },
    [getAllAccountType.pending]: (state) => {
    },
    [getAllAccountType.fulfilled]: (state, action) => {
      state.accountTypeList = action.payload;
    },
    [getAllAccountType.rejected]: (state, action) => {
        console.log("rejected get all account types");
      state.errorMsg = action.payload;
    },
  },
});

export default accountTypeSlice.reducer;

export const { setFormat } = accountTypeSlice.actions;
