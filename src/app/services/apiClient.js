import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://eduquiz-back-end.onrender.com/api/v1/", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
