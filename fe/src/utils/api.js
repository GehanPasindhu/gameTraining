import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_PATH;

//get courses
export const fetchCourses = () => axios.get(`${BASE_URL}/courses`);

//registration api
export const registerCourse = (data) =>
  axios.post(`${BASE_URL}/registrations`, data);
export const fetchRegistrations = (token) =>
  axios.get(`${BASE_URL}/registrations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

//login api
export const login = (credentials) =>
  axios.post(`${BASE_URL}/login`, credentials);

//contact apis
export const fetchContacts = (token) =>
  axios.get(`${BASE_URL}/contacts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const contactus = (data) => axios.post(`${BASE_URL}/contacts`, data);
