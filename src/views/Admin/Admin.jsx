import React from "react";
import AddAccountType from "./_admin/AddAccountType";
import "./button.css";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div className="bg-[#2B2B2B] pt-52 pb-56">
      <div className="flex gap-x-28 justify-center">
        {" "}
        <Link to='/add-account-type' className=" glow-on-hover p-2 flex flex-col ">
          <img src="plus.png" className="w-[98px] h-[98px] flex mx-auto" />
          <h3 className="font-work font-semibold text-white text-center">
            Account Type
          </h3>
        </Link>
        <Link className=" glow-on-hover p-2 flex flex-col ">
          <img src="plus.png" className="w-[98px] h-[98px] flex mx-auto" />
          <h3 className="font-work font-semibold text-white text-center">
            Add Account
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
