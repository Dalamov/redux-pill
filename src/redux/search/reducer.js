import initialState from "../state";

const SearchReducer = (state = initialState, action) => {
  console.log("before switch");
  switch (action.type) {
    case "UPDATE_SEARCH":
      console.log("inside reducer" + action.payload);
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default SearchReducer;
