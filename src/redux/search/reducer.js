import searchState from "./state";

const SearchReducer = (state = searchState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      console.log("inside search reducer" + action.payload);
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default SearchReducer;
