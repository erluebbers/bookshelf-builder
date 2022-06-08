import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducer";
// import ThunkMiddleware from "redux-thunk";
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import usersReducer from "./features/users/usersSlice";
// import booksReducer from "./components/features/books/booksSlice";
// import listsReducer from "./components/features/lists/listsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    // books: booksReducer,
    // lists: listsReducer,
  },
});

export default store;