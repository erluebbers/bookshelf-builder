import { configureStore } from "@reduxjs/toolkit";
import BooksContainer from "./features/books/BooksContainer";
// import rootReducer from "./reducer";
// import ThunkMiddleware from "redux-thunk";
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import userReducer from "./features/users/userSlice";
import booksReducer from "./features/books/booksSlice"
// import booksReducer from "./components/features/books/booksSlice";
// import listsReducer from "./components/features/lists/listsSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    books: booksReducer
    // books: booksReducer,
    // lists: listsReducer,
  },
});

export default store;