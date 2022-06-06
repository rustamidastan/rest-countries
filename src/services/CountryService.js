import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://restcountries.com/v2",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/all");
  },
  getEvent(alpha3Code) {
    return apiClient.get("/alpha/" + alpha3Code);
  },
};
