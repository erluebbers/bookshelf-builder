import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import booksReducer from "./features/books/booksSlice"
import listsReducer from "./features/lists/listsSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    books: booksReducer,
    lists: listsReducer
  },
});

export default store;