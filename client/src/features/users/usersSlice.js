import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";

// Action Creators
export const fetchUser = createAsyncThunk("users/fetchUser", () => {
  return fetch ("/me")
    .then(r => r.json())
    .then(user => useDispatch({ type: "users/userAdded", payload: user }))
})


// Reducers
const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [], //array of users
    status: "idle", //loading state
  },
  reducers: {
    userAdded(state, action) {
      state.entities.push(action.payload)
    },
  },
  extraReducers: {
    [fetchUser.pending](state) {
      state.status = "loading";
    },
    [fetchUser.fulfilled](state, action) {
      state.entites = action.payload
      state.status = "idle"
    },
  },
});

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer;