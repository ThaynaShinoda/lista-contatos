import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../slices/contactSlice";
import filterReducer from "../slices/filterSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType <typeof store.getState>
export default store