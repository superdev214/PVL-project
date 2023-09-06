import { http } from "../http-common/baseServer";

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
const getCurrentUser = () => {
  getToken();
  return http.get("/get-current-user");
};
const UserService = {
  registerUser,
  loginUser,
  getCurrentUser,
};

export default UserService;
