import { createSlice } from "@reduxjs/toolkit";

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
    deleteBooks(state, action) {
      state.items = state.items.filter(book => book.id !== action.payload)
    },
    addBooks(state, action) {
      state.items.push(action.payload)
    },
    updateBookDescription(state, action) {
      const book = state.items.find(book => book.id === action.payload.id)
      book.description = action.payload.description
    }
  },
});

export const { loadBooks, deleteBooks, addBooks, updateBookDescription } = booksSlice.actions

export default booksSlice.reducer;