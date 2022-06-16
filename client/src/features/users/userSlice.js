import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action Creators
export const fetchUser = createAsyncThunk("users/fetchUser", () => {
  return fetch ("/me")
    .then(r => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    })
})


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
  extraReducers: {
    [fetchUser.pending](state) {
      state.status = "loading";
    },
    [fetchUser.fulfilled](state, action) {
      state.selectedUser = action.payload
      state.status = "idle"
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions

export default userSlice.reducer;