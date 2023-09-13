import React, { useMemo, useEffect, useState } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import classNames from "classnames";
import getUserAnimation from "../../../utils/getUserAnimation";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/reducer/userSlice";
import { toast } from "react-toastify";
import { object, z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validationSchema";
import { variants_items, variants } from "../effectValue";
import IconHuman from "../Icon/IconHuman";
import IconKey from "../Icon/IconKey";
import IconLetter from "../Icon/IconLetter";
import PendingProcesss from "../../../ui-elements/PendingProcess";
import { useNavigate } from 'react-router-dom'

const initialUser = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const scrollAnimation = useMemo(() => getUserAnimation(), []);
  const [user, setUserinfo] = useState(initialUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMsg, loading, sucessSingup ,pendingSignup} = useSelector(
    (state) => state.userState
  );
  useEffect(() => {
    if (errorMsg && loading === false) toast.error(errorMsg);
  }, [loading]);
  useEffect(() => {
    if (sucessSingup) {
      toast.success("Sign up success");
      navigate("/login");
    }
  }, [sucessSingup]);
  
  const onSubmitHandler = (data) => {
    dispatch(registerUser(data));
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  return (
    <div>
      {pendingSignup && (
        <PendingProcesss/>
      )}
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="bg-[#2B2B2B]">
          <div className="container pt-[80px] mx-auto px-[30px] md:grid md:grid-cols-2 md:gap-x-10">
            <motion.img
              variants={variants_items}
              src="./assets/PLV-login-mobile.png"
              className="w-full md:hidden"
            />
            <motion.img
              variants={variants_items}
              src="./assets/PLV-login-md.png"
              className="w-full hidden md:block xl:hidden my-auto"
            />
            <motion.img
              variants={variants_items}
              src="./assets/PLV-login-xl.png"
              className="w-full hidden xl:block my-auto"
            />
            <div>
              {/* header */}
              <motion.div
                variants={variants}
                className="my-[30px] md:max-w-[330px] xl:max-w-[460px]"
              >
                <h1 className="mb-5 text-white font-work text-[38px] font-normal leading-[46px] xl:text-[51px] xl:leading-[56px]">
                  Create Account
                </h1>
                <p className="font-work text-base font-normal leading-[22px] text-white xl:text-[22px] xl:leading-[35px] capitalize">
                  Welcome! enter your details and start buying online accounts
                  for a fraction of the price.
                </p>
              </motion.div>
              <form
                className="pb-10 md:max-w-[330px] xl:min-w-[330px] space-y-[15px]"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                <motion.div
                  variants={variants_items}
                  className="flex items-center text-lg"
                >
                  <IconHuman />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-white pl-12 py-2 md:py-4 focus:outline-none w-full rounded-[20px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-black "
                    placeholder="Username"
                    {...register("name")}
                  />
                </motion.div>
                {errors.name && (
                  <p className="text-xs italic text-red-500 block">
                    {errors.name.message}
                  </p>
                )}
                <motion.div
                  variants={variants_items}
                  className="flex items-center text-lg "
                >
                  <IconLetter />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="bg-white pl-12 py-2 md:py-4 focus:outline-none w-full rounded-[20px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-black "
                    placeholder="Email Address"
                    {...register("email")}
                  />
                </motion.div>
                {errors.email && (
                  <p className="text-xs italic text-red-500 block">
                    {errors.email.message}
                  </p>
                )}
                <motion.div
                  variants={variants_items}
                  className="flex items-center text-lg "
                >
                  <IconKey />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-white pl-12 py-2 md:py-4 focus:outline-none w-full rounded-[20px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-black"
                    placeholder="Password"
                    {...register("password")}
                  />
                </motion.div>
                {errors.password && (
                  <p className="text-xs italic text-red-500">
                    {errors.password.message}
                  </p>
                )}
                <motion.div
                  variants={variants_items}
                  className="flex items-center text-lg mb-6 md:mb-8"
                >
                  <IconKey />
                  <input
                    type="password"
                    id="checkPassword"
                    name="checkPassword"
                    className="bg-white pl-12 py-2 md:py-4 focus:outline-none w-full rounded-[20px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-black"
                    placeholder="Confirm Password"
                    {...register("checkPassword")}
                  />
                </motion.div>
                {errors.checkPassword && (
                  <p className="text-xs italic text-red-500 block">
                    {errors.checkPassword.message}
                  </p>
                )}

                <motion.div
                  variants={variants_items}
                  className={classNames({
                    "h-[60px] text-[22px] !mt-[30px]": true,
                    "w-full text-white rounded-[20px] border-2 border-[#A259FF] px-[50px] font-work font-semibold leading-[22px]": true,
                    "pvl-btn flex": true,
                    "w-full": true,
                  })}
                  style={{
                    background:
                      "linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
                  }}
                >
                  <button type="submit" className="mx-auto">
                    Create account
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};
export default SignUp;
