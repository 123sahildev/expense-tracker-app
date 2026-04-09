// import { useForm } from 'react-hook-form'
import EmailIcon from "../assets/svgs/email.tsx";
import PasswordIcon from "../assets/svgs/password.tsx";
import ConfirmPassword from "../assets/svgs/confirmPassword.tsx";
import PasswordShow from "../assets/svgs/passwordShow.tsx";
import UserName from "../assets/svgs/username.tsx";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/svgs/googleIcon.tsx";
import ShowPassword from "../assets/svgs/showPassword.tsx";
import appLogo from "../../public/logo.svg";
import { useState, useEffect } from "react";
import type { RegisterTypes } from "../types/userForm.types.ts"
import { useForm } from "react-hook-form";
import axios from "axios";

export default function register() {
    const [landForm, setForm] = useState<boolean>(false);
    const { register, handleSubmit, reset,  formState : { errors }} = useForm<RegisterTypes>();
    const [hideShowPassword, setPassword] =  useState<boolean>(true);
    const [isPasswordMatched, setPasswordUnMatchedError] = useState<boolean>(false);

    useEffect(() => {
        if (errors.conformpassword) return setPasswordUnMatchedError(false);
    }, [ errors.conformpassword ]);

    useEffect(() => {
        setForm(true)
    }, []);
    
    const handleFormSubmit = async ( data: RegisterTypes) => {
        if (data.password !== data.conformpassword) return setPasswordUnMatchedError(true);
        if (data.password === data.conformpassword) {
            setPasswordUnMatchedError(false);
        }

        console.log("form data :", data);
    }

  return (
    <div className="w-screen h-screen py-10 overflow-y-scroll">
        <img src={appLogo} alt="" className="absolute top-3 left-3 h-7 ls:left-10 ls:top-5 ls:h-10"/>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={` ${landForm ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} duration-1000 flex transform navShadow outline outline-[#6e6d6d67] rounded-lg max-w-fit items-center flex-col mt-[calc(100vh-95vh)] ls:mt-[calc(100vh-90vh)] mx-auto bg-white ls:px-10 px-6 py-5 ls:py-10 `} >
            <div className=" items-center flex flex-col ">
                <h1 className="font-bold ls:text-[30px] text-[25px] text-[#46005c]">Register Now</h1>
                <p className="text-purple-900 ls:w-90 w-70 text-center ls:text-[20px] text-[16px]">Welcome please fillfull the all required fields and create your account</p>
            </div>
            <div className="flex flex-col gap-y-1 mt-3">
                <label htmlFor="username" className="ls:text-[20px] text-[15px] font-[Arial] ">Username</label>
                <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md">
                    <UserName className="text-[purple] w-6 h-6 ml-2" />
                    <input id="username" type="text" className=" border-none outline-none text-[16] ls:text-[20px] font-[Arial] cursor-pointer w-67 ls:w-90 ls:h-10 h-8 px-2"
                    {...register("username",
                        {
                            required: "please enter the username",
                            minLength: {
                                value: 10,
                                message: "username must be provided 10 characters"
                            }
                        }
                    )}
                     />
                </div>
            </div>
            { errors.username && <span className="w-full ml-2 text-[red]">{errors.username.message}</span> }
            <div className="max-w-fit flex flex-col gap-y-1 mt-5">
                <label htmlFor="username" className="ls:text-[20px] text-[15px] font-[Arial] ">Email</label>
                <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md ">
                    <EmailIcon className="text-[purple] w-6 h-6 ml-2" />
                    <input id="username" type="email" className=" border-none outline-none ls:text-[20px] text-[16px] font-[Arial] cursor-pointer w-67 ls:w-90 ls:h-10 h-8 px-2" 
                    {...register("email",
                        {
                            required: "please enter the email",
                            minLength: {
                                value: 15,
                                message: "email character can't be less then 15"
                            }
                        }
                    )}
                     />
                </div>
            </div>
            { errors.email && <span className="w-full ml-2 text-[red]">{errors.email.message}</span>}
            <div className="max-w-fit flex flex-col gap-y-1 mt-5">
                <label htmlFor="password" className="ls:text-[20px] text-[15px] ">Password</label>
                <div className="max-w-fit flex items-center outline outline-[purple] rounded-md">
                    <PasswordIcon className="text-[purple] w-6 h-6 ml-2" />
                    <input id="password" type={`${hideShowPassword ? "password" : "text"}`} className="border-none outline-none text-[16px] ls:text-[20px] font-[Arial] cursor-pointer w-59 ls:w-82 ls:h-10 h-8 px-2" 
                    {...register("password",
                        {
                            required: "please enter the password",
                            minLength: {
                                value: 10,
                                message: "password must be provided at least 10 characters"
                            }
                        }
                    )}
                    />
                    <ShowPassword onClick={() => setPassword(!hideShowPassword)} className=" text-[#000000cb] w-5 h-5 ls:w-7 ls:h-7 hover:bg-[#29292931] duration-300 cursor-pointer mr-1  active:bg-[#29292931] p-1 flex items-center rounded-full" />
                </div>
            </div>
            { errors.password && <span className="w-full ml-2 text-[red]">{errors.password.message}</span>}
            <div className="max-w-fit flex flex-col gap-y-1 mt-5">
                <label htmlFor="passwordConform" className="ls:text-[20px] text-[15px]">Conform password</label>
                <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md">
                    <ConfirmPassword className="text-[purple] w-6 h-6 ml-2" />
                    <input id="passwordConform" type="text" className="cursor-pointer w-67 ls:w-90 ls:h-10 h-8 px-2 border-none outline-none text-[16px] ls:text-[20px] font-[Arial]" 
                    {...register("conformpassword", { required: "please comform your password" } )} />
                </div>
            </div>
            { errors.conformpassword && <span className="w-full ml-2 text-[red]">{errors.conformpassword.message}</span>}
            { isPasswordMatched && <span className="w-full ml-2 text-[red]">conform password must be matched</span>}
            <div className="w-full items-end ml-3  mt-4">
                <label htmlFor="checkboxLabel" className=" cursor-pointer text-center"><input id="checkboxLabel" type="checkbox" className="cursor-pointer text-lg scale-none ls:scale-[1.5]"
                {...register("termsandconditions",
                    {
                        required: "you must igree to the terms and conditions"
                    }
                )}
                /> I agree to the <span className="ls:text-lg text-[13px] text-[purple]">Terms & Conditions</span></label>
            </div>
            {errors.termsandconditions && <span className="w-full ml-2 text-[red]" >{errors.termsandconditions.message}</span>}
            <div className="w-75 ls:w-96 flex h-10 ls:h-14 mt-6 mx-auto">
                <button type="submit" className="w-full bg-[#2e0181] rounded-xl text-white hover:outline hover:outline-[green] duration-250 active:bg-[#1e0155] text-[20px] ls:text-[28px]">Register</button>
            </div>
            <div className="mt-5 justify-center items-center flex">
                <div className="ls:w-40 w-28 border border-[#555555aa]"></div>
                <p className="px-2">OR</p>
                <div className="w-28 ls:w-40 border border-[#494949aa]"></div>
            </div>
            <div className="mt-3 cursor-pointer hover:border-[purple] duration-300 flex items-center text-center text-[15px] ls:text-[22px] justify-center gap-x-2 border border-[#1f1f1faa] py-1 ls:py-2 rounded-full w-[calc(100%-10%)] ls:w-[calc(100%-5%)] ">
                continue with
                <GoogleIcon className="w-6 h-6 ls:w-8 ls:h-8" />
            </div>
            <div className="flex items-center mt-5">
                <p className="text-[13px] ls:text-lg">Already have an Account?</p>
                <Link to={"/login"} className="hover:border-b h-fit hover:border-[purple] text-[purple] ls:text-lg text-[13px] ml-1">Login</Link>
            </div>
        </form>
    </div>
  )
}
