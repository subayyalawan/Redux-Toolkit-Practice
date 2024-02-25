import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/todo/TodoSlice"


export const Store = configureStore({
    reducer: toDoReducer
})