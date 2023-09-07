import { http } from "../http-common/baseServer";

const addAccountToCart = (data) => {
  return http.post("/add-account-to-cart", data);
};
const getAllCartbyUser = (data) => {
  return http.get(`/get-all-cart/?email=${data}`);
};
const AddcartService = {
  addAccountToCart,
  getAllCartbyUser,
};

export default AddcartService;
