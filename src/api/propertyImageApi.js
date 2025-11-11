import axios from "axios";
import { API_BASE_URL } from "./config";

const PROPERTY_IMAGE_API = `${API_BASE_URL}/propertyimage`;

export const getPropertyImageById = async (idProperty) => {
  const response = await axios.get(`${PROPERTY_IMAGE_API}/${idProperty}`);
  return response.data;
};
