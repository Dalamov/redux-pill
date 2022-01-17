import initialState from "../state";

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TYPE":
      console.log("inside filter reducer, "  + action.payload)
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default FilterReducer;