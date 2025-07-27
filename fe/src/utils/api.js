import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_PATH;

export const fetchCourses = () => axios.get(`${BASE_URL}/courses`);
export const registerCourse = (data) =>
  axios.post(`${BASE_URL}/registrations`, data);
export const login = (credentials) =>
  axios.post(`${BASE_URL}/login`, credentials);
export const fetchContacts = () => axios.get(`${BASE_URL}/contacts`);
