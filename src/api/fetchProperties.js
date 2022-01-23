import axios from "axios";
const abortController = new AbortController();
const signal = abortController.signal;

export async function getProperties() {
  // baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  const response = await axios({
    url: `http://localhost:8100/api/properties`,
    method: "GET",
    headers: {
      Authorization: `Bearer 0b1d6008634d9d57e67324d0dff3fb5c7d9da22a96c01ea7278051ab4cfcdb6c`,
    },
    signal,
  });

  return response.data;
}

// export const getProperty = (propertyId, api = makeApi()) => {
//   return api.get(`/${propertyId}`);
// };

// export const getPropertiesByCity = (city, api = makeApi()) => {
//   return api.get(`?city=${city}`);
// };

// export const getPropertiesByFilter = (filter, api = makeApi()) => {
//   return api.get(`${filter}`);
// };

// export async function getProperties() {
// 	// const { id = undefined } = params;
// 	const response = await axios({
// 		baseURL: `http://localhost:3000`,
// 		url: `/properties`,
// 		method: "GET",
// 	});
// 	return response.data;
