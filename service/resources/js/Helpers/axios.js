import { axiosError } from "./errors";

export const axios = async (request) => {
  try {
    const response = await window.axios.get(request.url);
    return response.data;
  } catch (error) {
    axiosError(200, error);
  }
};
