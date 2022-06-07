import { combineReducers } from "redux";
import usersReducer from "./components/features/users/usersSlice";
import booksReducer from "./components/features/books/booksSlice";
import listsReducer from "./components/features/lists/listsSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  books: booksReducer,
  lists: listsReducer,
});

export default rootReducer;