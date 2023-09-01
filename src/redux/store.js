import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userSlice"

const reducer = {
    userState: userReducer
}
export const store = configureStore({
    reducer: reducer,
    devTools: true,
})