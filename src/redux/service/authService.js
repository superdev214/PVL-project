import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:8080" });

const registerUser = (data) => {
    return http.post("/register-user",data);
}

const UserService = {
    registerUser,
}

export default UserService;