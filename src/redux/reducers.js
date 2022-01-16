// import {} from"./types";
  import initialState from "./state";

const AppReducer = (state = initialState, action) => {
  console.log("before switch")
  switch (action.type) {
    case "UPDATE_SEARCH":
      console.log("inside reducer" + action.payload)
      return {
        ...state,
        search : action.payload
      };

    default:
      return state;
  }
};

export default AppReducer;
