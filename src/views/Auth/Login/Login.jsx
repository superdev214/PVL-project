import React, { useMemo, useEffect, useState } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import classNames from "classnames";
import getUserAnimation from "../../../utils/getUserAnimation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../../redux/reducer/userSlice";
import { toast } from "react-toastify";
import { object, z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validationSchema";
import { variants_items, variants } from "../effectValue";
import IconHuman from "../Icon/IconHuman";
import IconKey from "../Icon/IconKey";
import IconLetter from "../Icon/IconLetter";
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const initialUser = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const scrollAnimation = useMemo(() => getUserAnimation(), []);
  const [user, setUserinfo] = useState(initialUser);
  const dispatch = useDispatch();
 
  const { loginError, loading, loggedin } = useSelector(
    (state) => state.userState
  );
  useEffect(() => {
    if (loading === false && loginError) toast.error(loginError);
  }, [loading]);
  useEffect(() => {
    console.log(loggedin);
    if (loggedin) {
      toast.success("Congratulations");
      navigate("/marketplace");
    }
  }, [loggedin]);
  const onSubmitHandler = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  return (
    <div>
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
                  Login To Your Account
                </h1>
                <p className="font-work text-base font-normal leading-[22px] text-white xl:text-[22px] xl:leading-[35px] capitalize">
                  Log in to your account to start buying online accounts for a
                  fraction of the price!
                  <br />
                  <span className="italic font-bold">
                    Note : You have to login to go to marketplace.
                  </span>
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
                    id="email"
                    name="email"
                    className="bg-white pl-12 py-2 md:py-4 focus:outline-none w-full rounded-[20px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-black "
                    placeholder="Username"
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
                    Log in
                  </button>
                </motion.div>
              </form>
              <motion.span
                variants={variants}
                className="text-white font-work text-[14px] leading-[20px] font-normal mt-4 md:mt-[28px] md:text-sm xl:!mt-[39px] px-2"
              >
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="text-[#A259FF]">Sign up here!</span>
                </Link>
              </motion.span>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};
export default Login;
