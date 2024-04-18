// baseUrl = https://660195be87c91a11641b30c0.mockapi.io/:endpoint

// get all = /advert

// get id = /advert/:id

import axios from 'axios';

axios.defaults.baseURL =
  'https://660195be87c91a11641b30c0.mockapi.io/api/campers';

export const getAllCamper = async () => {
  const response = await axios.get(`/advert`);
  return response.data;
};
export const getCamperById = async id => {
  const response = await axios.get(`/advert/${id}`);
  return response.data;
};
