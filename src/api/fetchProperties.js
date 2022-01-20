// import axios from "axios";
// import { API, PROPERTIES } from "../constants/routes";

// export const makeApi = () => {
//   return axios.create({
//     baseURL: `${API}${PROPERTIES}`,
//   });
// };

// export const getProperties = () => {
//   return makeApi.get(``);
// };

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
