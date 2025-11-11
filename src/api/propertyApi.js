import axios from "axios";
import { API_BASE_URL } from "./config";

const PROPERTY_API = `${API_BASE_URL}/property`;

export const getProperties = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const response = await axios.get(`${PROPERTY_API}?${params}`);
  return response.data;
};

export const getPropertyById = async (id) => {
  const response = await axios.get(`${PROPERTY_API}/${id}`);
  return response.data;
};  
