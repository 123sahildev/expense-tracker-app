// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import EmailIcon from "../assets/svgs/email.tsx";
import PasswordIcon from "../assets/svgs/password.tsx";
import PasswordShow from "../assets/svgs/passwordShow.tsx";
import ShowPassword from "../assets/svgs/showPassword.tsx";
import appLogo from "../../public/logo.svg";
// import axios from "axios";

import { useEffect, useState } from "react"
import type { LoginTypes } from "../types/userForm.types.ts";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function login() {
    const [landForm, setForm] = useState<boolean>(false);
    const [isPassword, setPassword] = useState<boolean>(true);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginTypes>();

    useEffect(() => {
        setForm(true);
    }, []);


    const handleFormSubmit = async (data: LoginTypes) => {
        console.log(data)
    }

  return (
    <div className="w-screen h-screen py-10 flex flex-col items-center">
        <img src={appLogo} alt="" className="absolute ts:left-10 mx-auto h-6  top-4 left-3 ts:top-5 ts:h-10"/>
      <form  onSubmit={handleSubmit(handleFormSubmit)}  className={` ${landForm ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} duration-1000 flex transform formShadow outline outline-[#6e6d6d67] rounded-lg max-w-fit items-center flex-col mt-[calc(100vh-95vh)] ts:mt-[calc(100vh-90vh)] mx-auto bg-white ts:px-10 px-6 py-7 ts:py-10 `}>
        <h1 className="text-[30px] font-bold font-[Arial] text-[#4d004d]">Welcome back!</h1>
        <div className=" flex flex-col gap-y-1.5 mt-5">
            <label htmlFor="username" className="ts:text-[20px] text-[15px] font-[Arial] ">Email</label>
            <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md ">
                <EmailIcon className="text-[purple] w-6 h-6 ml-2" />
                <input id="username" type="email" className="border-none outline-none text-[16] ts:text-[20px] font-[Arial] cursor-pointer w-65 ts:w-96 ts:h-10 h-8 px-2"
                {...register("email",
                    {
                        required: "Email must be provided",
                        minLength: {
                            value: 13,
                            message: "email must have at least 13 characters"
                        }
                    }
                )}
                 />
            </div>
        </div>
        {errors.email && <span className="w-full ml-2 text-[red] ts:text-lg text-[14px]">{errors.email.message}</span>}
        <div className=" flex flex-col gap-y-1.5 mt-5">
            <label htmlFor="password" className="ts:text-[20px] text-[15px] font-[Arial] ">Password</label>
            <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md ">
                <PasswordIcon  className="text-[purple] w-6 h-6 ml-2 " />
                <input id="password" type={`${ isPassword ? "password" : "text"}`} className=" border-none outline-none text-[16] ts:text-[20px] font-[Arial] cursor-pointer w-58 ts:w-88 ts:h-10 h-8 px-2" 
                {...register("password",
                    {
                        required: "please enter the password",
                        minLength: {
                            value: 10,
                            message: "password must have at least 12 characters"
                        }
                    }
                )}
                />
                {!isPassword && <PasswordShow onClick={() => setPassword(!isPassword)} className="p-1 hover:bg-[#35353525] text-[#000000cb] mr-1 w-6 duration-200 rounded-full  h-6 ts:w-8 ts:h-8 " />}
                {isPassword && <ShowPassword onClick={() => setPassword(!isPassword)} className="p-1 hover:bg-[#35353525] text-[#000000cb] mr-1 w-6 duration-200 rounded-full  h-6 ts:w-8 ts:h-8 " />}
            </div>
        </div>
        {errors.password && <span className="w-full ml-2 mt-0 text-[red] ts:text-lg text-[14px]">{errors.password.message}</span>}
        <div className="flex w-full mt-5 items-end ">
            <label htmlFor="checkbox" className="ml-0 cursor-pointer text-[16px] ts:text-xl"><input type="checkbox" id="checkbox" className=" cursor-pointer ts:scale-[1.5] ts:mr-2 mr-1 scale-[1.2]" 
            {...register("rememberme",)}
            />Remeber me</label>
        </div>
        <button type="submit" className="w-75 ts:w-105 h-10 ts:h-13 mt-6 mx-auto bg-[#2e0181] rounded-lg text-white hover:outline hover:outline-[green] duration-250 active:bg-[#1e0155] text-[18px] ts:text-[24px]">Login</button>        
        <div className="mx-auto max-w-fit mt-5 flex items-center">
            <p className="text-md ">Don't have an account?</p>
            <Link to={"/register"} className="text-[purple] leading-5 text-md ml-1 hover:border-b hover:border-[purple] cursor-pointer">Register</Link>
        </div>
      </form>
    </div>
  );
}
