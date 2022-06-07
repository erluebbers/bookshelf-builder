// Action Creators


// Reducers
const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "books/add":
      return [...state, action.payload];

    default:
      return state;
  }
}