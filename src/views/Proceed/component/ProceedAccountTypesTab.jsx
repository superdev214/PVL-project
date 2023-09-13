import AccountTypeCard from "../../Marketplace/component/AccountTypeCard";
import PendingProcesss from "../../../ui-elements/PendingProcess";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PaymentForm from "./PaymentForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllCart,
  setFormatAccountInfoMsg,
} from "../../../redux/reducer/userSlice";
import { getAllAccountType } from "../../../redux/reducer/accountTypeSlice";
import CartItem from "./CartItem";
import "./effect.css";
import { toast } from "react-toastify";
const fakeAccountList = [
  {
    type: "netflix",
    life_price: 1.63,
    six_months_price: 0.33,
  },
  {
    type: "spotify",
    life_price: 1.63,
    six_months_price: 0.33,
    color1: "rgba(30, 215, 96, 0.50)",
  },
  {
    type: "crunchyroll",
    life_price: 5.0,
    six_months_price: 0,
    color1: "rgba(255, 141, 14, 0.50)",
  },
];
const ProceedAccountTypesTab = () => {
  const dispatch = useDispatch();
  const { name, email, addcarts, totalPrice, adminPermission, accountInfoMsg } =
    useSelector((state) => state.userState);
  const { accountTypeList } = useSelector((state) => state.accountTypeList);
  const [cart, setCart] = useState([]);
  const getAccountInfo = () => {
    const accountInfo = [];
    addcarts.forEach((item) => {
      const { typename, count } = item;
      const account = accountTypeList.find((acc) => acc.typename === typename);
      if (account) {
        console.log(account);
        const { typename, avatar, priceLifeTime } = account;
        accountInfo.push({
          typename: typename,
          price: priceLifeTime,
          avatar: avatar,
          count: count,
        });
      }
    });
    setCart(accountInfo);
  };
  useEffect(() => {
    if (email) {
      console.log(email);
      dispatch(getAllAccountType);
      if (!adminPermission) dispatch(getAllCart(email));
    }
  }, [email]);
  useEffect(() => {
    if (addcarts) {
      getAccountInfo();
    }
  }, [addcarts]);
  useEffect(() => {
    if (accountInfoMsg === "Success") {
      toast.success(
        "Account info sent to your email. Please check your email."
      );
      dispatch(getAllCart(email));
    } else if (accountInfoMsg !== null && accountInfoMsg !== "pending") {
      toast.error(accountInfoMsg);
    }
  }, [accountInfoMsg]);
  useEffect(() => {
    dispatch(setFormatAccountInfoMsg());
  }, []);
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #3B3B3B",
      }}
    >
      {accountInfoMsg === "pending" && (
        <PendingProcesss/>
      )}

      {!adminPermission && (
        <div className="container mx-auto px-[30px] py-10 grid grid-cols-1 gap-y-[30px] md:grid-cols-2 md:gap-x-[30px] xl:grid-cols-3">
          {cart.map((item, index) => {
            return (
              <CartItem
                key={index}
                typename={item.typename}
                price={item.price}
                avatar={item.avatar}
                count={item.count}
              />
            );
          })}
        </div>
      )}
      <div className="container mx-auto px-[30px] py-10">
        <PaymentForm price={totalPrice} />
      </div>
    </div>
  );
};
export default ProceedAccountTypesTab;
