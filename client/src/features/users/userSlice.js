import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action Creators


// Reducers
const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedUser: {}
  },
  reducers: {
    setUser(state, action) {
      state.selectedUser = action.payload
    },
    deleteUser(state) {
      state.selectedUser = {}
    }
  },
});

export const { setUser, deleteUser } = userSlice.actions

export default userSlice.reducer;