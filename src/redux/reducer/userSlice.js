import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import UserService from "../service/authService";

const initialState = {
    name:"",
    email:"",
}
export const registerUser = createAsyncThunk(
    "user/register",
    async(data) => {
        const res = await UserService.registerUser(data);
        return res.data;
    }
)
export const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers:{
        logout: () => initialState,
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    },
    extraReducers: {
        [registerUser.fulfilled] : (state,action) => {
            return [...action.payload];
        }
    }
})

export default userSlice.reducer;

export const {logout, setUser} = userSlice.actions;
