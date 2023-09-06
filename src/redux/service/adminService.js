import { http } from "../http-common/baseServer";

const addAccount = (data) => {
  return http.post("/add-account", data);
};

const AdminService = {
  addAccount,
};

export default AdminService;
