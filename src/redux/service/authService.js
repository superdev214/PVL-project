import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:8080" });

const getToken = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
    http.defaults.headers.common["x-access-token"] = token;
};
const registerUser = (data) => {
  return http.post("/register-user", data);
};
const loginUser = (data) => {
  return http.post("/login", data);
};
const UserService = {
  registerUser,
  loginUser,
};

export default UserService;
