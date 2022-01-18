import initialState from "../state";

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TYPE":
      console.log("inside filter reducer, " + action.payload);
      return {
        ...state,
        typeOfPropierty: action.payload
      };

    case "GET_PRICE":
      console.log("inside filter reducer, " + action.payload);
      return {
        ...state,
        price: action.payload
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
