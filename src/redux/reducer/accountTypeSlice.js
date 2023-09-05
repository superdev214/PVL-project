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
  async (data, { rejectWithValue }) => {
    try {
      const res = await AccountTypeService.getAllAccountType(data);
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
        state.loading = true;
    },
    [registerAccountType.fulfilled]: (state, action) => {
      state.errorMsg = "success";
      state.loading = false;
      state.accountTypeList.push(action.payload);
    },
    [registerAccountType.rejected]: (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.errorMsg = action.payload;
      console.log(state.errorMsg);
      console.log(action.payload);
    },
  },
});

export default accountTypeSlice.reducer;

export const { setFormat } = accountTypeSlice.actions;
