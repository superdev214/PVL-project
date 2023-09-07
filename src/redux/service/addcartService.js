import { http } from "../http-common/baseServer";

const addAccountToCart = (data) => {
  return http.post("/add-account-to-cart", data);
};
const AddcartService = {
  addAccountToCart,
};

export default AddcartService;
