import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action Creators


// Reducers
const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [], 
  },
  reducers: {
    loadBooks(state, action) {
      state.items = action.payload
    },
  },
});

export const { loadBooks } = booksSlice.actions

export default booksSlice.reducer;