import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://service.sibbe.fi",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export { axiosInstance };
