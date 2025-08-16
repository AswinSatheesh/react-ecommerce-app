import axios from "axios";

const BASEURL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
  const response = await axios.get(`${BASEURL}/products`);
  return response.data;
};

export const getProductBasedId = async (id) => {
  const response = await axios.get(`${BASEURL}/products/${id}`);
  return response.data;
};

export const getProductImage = async (id) => {
  const response = await axios.get(`${BASEURL}/products/${id}/image`);
  return response.data;
};
