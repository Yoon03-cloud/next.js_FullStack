import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies in requestscd
});

instance.interceptors.response.use(
  (response: { data: unknown }) => response,
  (error: { response: { status: number } }) => {
    if (error.response?.status === 401) {
      console.log("API failed with 401 Unauthorized. ");
    }
    return Promise.reject(error);
  },
);

export default instance;
