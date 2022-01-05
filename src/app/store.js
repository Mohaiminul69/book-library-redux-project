import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bookReducer from "../redux/slices/bookSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: bookReducer,
  },
});
