// Action Creators


// Reducers
const initialState = [];

export default function listsReducer(state = initialState, action) {
  switch (action.type) {
    case "lists/add":
      return [...state, action.payload];

    default:
      return state;
  }
}