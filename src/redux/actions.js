// export const updateSearch = (propierty) => ({
//   type: "UPDATE_SEARCH",
//   payload: propierty,
// });

const updateSearch = propierty => {
  return {
    type: "UPDATE_SEARCH",
    payload: propierty,
  }
}

export default updateSearch;