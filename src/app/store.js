import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todofeature/todoSlice";

export const store = configureStore({
    reducer: todoSlice
});