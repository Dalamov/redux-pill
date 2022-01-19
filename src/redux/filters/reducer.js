import filterState from "./state";

const FilterReducer = (state = filterState, action) => {
  switch (action.type) {
    case "GET_TYPE":
      console.log("inside filter reducer, " + action.payload);
      return {
        ...state,
        typeOfProperty: action.payload
      };

    case "GET_PRICE":
      return {
        ...state,
        price: action.payload.sort(function(a, b){return a - b})
      };

    case "GET_CAPACITY":
      console.log("inside filter reducer, " + action.payload);
      return {
        ...state,
        capacity: action.payload
      };

    default:
      return state;
  }
};

export default FilterReducer;
