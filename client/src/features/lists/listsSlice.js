import { createSlice } from "@reduxjs/toolkit";


const listsSlice = createSlice({
  name: "lists",
  initialState: {
    collections: [], 
  },
  reducers: {
    loadLists(state, action) {
      state.collections = action.payload
    },
    addLists(state, action) {
      state.collections.push(action.payload)
    },
    updateLists(state, action) {
      const editedList = state.collections.find(list => list.id === action.payload.list.id)
      editedList.books.push(action.payload.book)
    },
  },
});

export const { loadLists, addLists, updateLists } = listsSlice.actions

export default listsSlice.reducer;