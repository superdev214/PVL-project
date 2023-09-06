import { http } from "../http-common/baseServer";

const registerAccountType = (data) => {
  return http.post("/register-account-type", data);
};
const deleteAccountType = (data) => {
  return http.delete("/delete-account-type", data);
};
const getAllAccountType = () => {
    return http.get("/get-all-account-type");
}
const AccountTypeService = {
  registerAccountType,
  deleteAccountType,
  getAllAccountType,
};

export default AccountTypeService;
