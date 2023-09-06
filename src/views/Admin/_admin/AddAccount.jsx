import React, { useEffect } from "react";
import { object, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { accountLoginInfoSchema } from "../validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "../../../redux/reducer/userSlice";
import { toast } from "react-toastify";
const AddAccount = () => {
  const onSubmitHandler = (data) => {
    console.log(data);
    dispatch(addAccount(data));
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(accountLoginInfoSchema),
  });
  const dispatch = useDispatch();
  const { addAccountError } = useSelector((state) => state.userState);
  useEffect(() => {
    if(addAccountError === 'success')
      {
        toast.success("Add account success.");
        reset();
      }
    else if(addAccountError)
      toast.error(addAccountError);
  },[addAccountError]);
  return (
    <div className="bg-[#2B2B2B] pt-[80px] pb-10 w-full overflow-hidden">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account Login information
        </h2>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="accountType"
              >
                Account Type
              </label>
              <input
                id="accountType"
                type="text"
                name="accountType"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                {...register("accountType")}
              />
              {errors.accountType && (
                <p className="text-xs italic text-red-500 block py-2">
                  {errors.accountType.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                {...register("emailAddress")}
              />
              {errors.emailAddress && (
                <p className="text-xs italic text-red-500 block py-2">
                  {errors.emailAddress.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs italic text-red-500 block py-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="checkPassword"
              >
                Password Confirmation
              </label>
              <input
                id="checkPassword"
                name="checkPassword"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                {...register("checkPassword")}
              />
              {errors.checkPassword && (
                <p className="text-xs italic text-red-500 block py-2">
                  {errors.checkPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="addaccount" type="submit">
              Save
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddAccount;
