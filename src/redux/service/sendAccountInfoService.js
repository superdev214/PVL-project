import { http } from "../http-common/baseServer";

const sendAccountByEmail = (data) => {
  return http.post("/send-account-info",data);
};

const SendAccountInfoService = {
    sendAccountByEmail,
};

export default SendAccountInfoService;
