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
const UserService = {
  registerUser,
  loginUser,
};

export default UserService;
