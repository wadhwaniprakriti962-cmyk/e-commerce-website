import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-website-ej4f.onrender.com/api",
});

export default API;