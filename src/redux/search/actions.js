
const updateSearch = (property) => {

  return {
    type: "UPDATE_SEARCH",
    payload: property,
  }
}

export default updateSearch;