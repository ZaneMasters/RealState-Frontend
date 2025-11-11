import axios from "axios";
import { API_BASE_URL } from "./config";

const OWNER_API = `${API_BASE_URL}/owner`;

export const getOwners = async () => {
  const response = await axios.get(OWNER_API);
  return response.data;
};

export const getOwnerById = async (id) => {
  const response = await axios.get(`${OWNER_API}/${id}`);
  return response.data;
};
