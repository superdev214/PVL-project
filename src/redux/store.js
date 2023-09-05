import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userSlice"
import accountTypeReducer from "./reducer/accountTypeSlice"
const reducer = {
    userState: userReducer,
    accountTypeList : accountTypeReducer,
}
export const store = configureStore({
    reducer: reducer,
    devTools: true,
})