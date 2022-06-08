import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Action Creators



// Reducers

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [], //array of users
    status: "idle", //loading state
  },
  reducers: {
    userCreated(state, action) {
      state.entities.push(action.payload)
    },
  }

});

export const { userCreated } = usersSlice.actions

export default usersSlice.reducer;