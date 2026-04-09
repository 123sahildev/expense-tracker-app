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

export default function login() {
    const [landForm, setForm] = useState<boolean>(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginTypes>();

    useEffect(() => {
        setForm(true);
    }, []);


    const handleFormSubmit = async (data: LoginTypes) => {
        
    }

  return (
    <div className="w-screen h-screen py-10 flex flex-col items-center">
        <img src={appLogo} alt="" className="absolute ls:left-10 mx-auto h-6  top-4 left-3 ls:top-5 ls:h-10"/>
      <form  onSubmit={handleSubmit(handleFormSubmit)}  className={` ${landForm ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} duration-1000 flex transform navShadow outline outline-[#6e6d6d67] rounded-lg max-w-fit items-center flex-col mt-[calc(100vh-95vh)] ls:mt-[calc(100vh-90vh)] mx-auto bg-white ls:px-10 px-6 py-7 ls:py-10 `}>
        <h1 className="text-[30px] font-bold font-[Arial] text-[#4d004d]">Welcome back!</h1>
        <div className=" flex flex-col gap-y-1.5 mt-5">
            <label htmlFor="username" className="ls:text-[20px] text-[15px] font-[Arial] ">Email</label>
            <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md ">
                <EmailIcon className="text-[purple] w-6 h-6 ml-2" />
                <input id="username" type="email" className="border-none outline-none text-[16] ls:text-[20px] font-[Arial] cursor-pointer w-65 ls:w-96 ls:h-10 h-8 px-2"
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
        {errors.email && <span className="w-full ml-2 text-[red]">{errors.email.message}</span>}
        <div className=" flex flex-col gap-y-1.5 mt-5">
            <label htmlFor="password" className="ls:text-[20px] text-[15px] font-[Arial] ">Password</label>
            <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md ">
                <PasswordIcon className="text-[purple] w-6 h-6 ml-2" />
                <input id="password" type="password" className=" border-none outline-none text-[16] ls:text-[20px] font-[Arial] cursor-pointer w-60 ls:w-90 ls:h-10 h-8 px-2" 
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
                <ShowPassword className=" text-[#000000cb] mr-1 w-4 h-4 ls:w-6 ls:h-6 " />
            </div>
        </div>
        {errors.password && <span className="w-full ml-2 text-[red]">{errors.password.message}</span>}
        <div className="flex w-full mt-5 items-end ">
            <label htmlFor="checkbox" className="ml-0 cursor-pointer text-[16px] ls:text-xl"><input type="checkbox" id="checkbox" className=" cursor-pointer ls:scale-[1.5] ls:mr-2 mr-1 scale-[1.2]" 
            {...register("rememberme",)}
            />Remeber me</label>
        </div>
        <button type="submit" className="w-75 ls:w-105   h-10 ls:h-13 mt-6 mx-auto bg-[#2e0181] rounded-xl text-white hover:outline hover:outline-[green] duration-250 active:bg-[#1e0155] text-[18px] ls:text-[24px]">Login</button>        
      </form>
    </div>
  )
}
