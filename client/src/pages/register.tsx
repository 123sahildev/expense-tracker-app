// import { useForm } from 'react-hook-form'
import EmailIcon from "../assets/svgs/email.tsx";
import PasswordIcon from "../assets/svgs/password.tsx";
import ConfirmPassword from "../assets/svgs/confirmPassword.tsx";
// import PasswordShow from "../assets/svgs/passwordShow.tsx";
import UserName from "../assets/svgs/username.tsx";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/svgs/googleIcon.tsx";
import PasswordShow from "../assets/svgs/passwordShow.tsx";
import ShowPassword from "../assets/svgs/showPassword.tsx";
import appLogo from "../../public/logo.svg";
import { useState, useEffect } from "react";
import type { RegisterTypes, RegisterApiData } from "../types/userForm.types.ts"
import { useForm } from "react-hook-form";
import { RegisterApiFunction } from "../utils/formFunctions.ts"

export default function register() {
    const [landForm, setForm] = useState<boolean>(false);
    const { register, handleSubmit, reset, formState : { errors }} = useForm<RegisterTypes>();
    const [hideShowPassword, setPassword] =  useState<boolean>(true);
    const [isPasswordMatched, setPasswordUnMatchedError] = useState<boolean>(false);

    useEffect(() => {
        if (errors.conformpassword) return setPasswordUnMatchedError(false);
    }, [ errors.conformpassword ]);

    useEffect(() => {
        setForm(true)
    }, []);
    
    const handleFormSubmit = async ( data: RegisterTypes) =>  {
        if (data.password !== data.conformpassword) return setPasswordUnMatchedError(true);
        if (data.password !== data.conformpassword) return setPasswordUnMatchedError(true);
        setPasswordUnMatchedError(false);
        let extendedData = {username: data.username, email: data.email, password: data.password}
        let res: RegisterApiData = await RegisterApiFunction(extendedData);
        console.log("response data :", res)

        console.log("form data :", data);
    }

  return (
    <div className="w-screen h-screen py-10 overflow-y-scroll">
        <img src={appLogo} alt="" className="absolute top-3 left-3 h-7 ts:left-10 ts:top-5 ts:h-10"/>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={` ${landForm ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} duration-1000 fltex transform navShadow outline outline-[#6e6d6d67] rounded-lg max-w-fit items-center flex-col mt-[calc(100vh-95vh)] md:mt-[calc(100vh-90vh)] mx-auto bg-white ts:px-10 px-5 py-5 ts:py-10 `} >
            <div className=" items-center flex flex-col ">
                <h1 className="font-bold ts:text-[30px] text-[25px] text-[#46005c]">Register Now</h1>
                <p className="text-purple-900 ts:w-90 w-70 text-center ts:text-[20px] text-[16px]">Welcome please fillfull the all required fields and create your account</p>
            </div>
            <div className="flex max-w-fit flex-col gap-y-1 mt-3 mx-auto">
                <label htmlFor="username" className="ts:text-[20px] text-[15px] font-[Arial] ">Username</label>
                <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md">
                    <UserName className="text-[purple] w-6 h-6 ml-2" />
                    <input id="username" type="text" className=" border-none outline-none text-[16] ts:text-[20px] font-[Arial] cursor-pointer w-67 ts:w-90 ts:h-10 h-8 px-2"
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
            { errors.username && <span className="w-full ml-2 text-[red] ts:text-lg text-[14px]">{errors.username.message}</span> }
            <div className="max-w-fit flex flex-col gap-y-1 mt-5 mx-auto">
                <label htmlFor="username" className="ts:text-[20px] text-[15px] font-[Arial] ">Email</label>
                <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md ">
                    <EmailIcon className="text-[purple] w-6 h-6 ml-2" />
                    <input id="username" type="email" className=" border-none outline-none ts:text-[20px] text-[16px] font-[Arial] cursor-pointer w-67 ts:w-90 ts:h-10 h-8 px-2" 
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
            { errors.email && <span className="w-full ml-2 text-[red] ts:text-lg text-[14px]">{errors.email.message}</span>}
            <div className="max-w-fit flex flex-col gap-y-1 mt-5 mx-auto">
                <label htmlFor="password" className="ts:text-[20px] text-[15px] ">Password</label>
                <div className="max-w-fit flex items-center outline outline-[purple] rounded-md">
                    <PasswordIcon className="text-[purple] w-6 h-6 ml-2" />
                    <input id="password" type={`${hideShowPassword ? "password" : "text"}`} className="border-none outline-none text-[16px] ts:text-[20px] font-[Arial] cursor-pointer w-59 ts:w-82 ts:h-10 h-8 px-2" 
                    {...register("password",
                        {
                            required: "please enter the password",
                            minLength: {
                                value: 10,
                                message: "password must be contain at least 10 characters"
                            }
                        }
                    )}
                    />
                    { hideShowPassword && <ShowPassword onClick={() => setPassword(!hideShowPassword)} className=" text-[#000000cb] w-5 h-5 ts:w-7 ts:h-7 hover:bg-[#29292931] duration-300 cursor-pointer mr-1  active:bg-[#29292931] p-1 flex items-center rounded-full" />}
                    {!hideShowPassword && <PasswordShow onClick={() => setPassword(!hideShowPassword)} className=" text-[#000000cb] w-5 h-5 ts:w-7 ts:h-7 hover:bg-[#29292931] duration-300 cursor-pointer mr-1  active:bg-[#29292931] p-1 flex items-center rounded-full" />}
                </div>
            </div>
            { errors.password && <span className="w-full ml-2 text-[red] ts:text-lg text-[14px]">{errors.password.message}</span>}
            <div className="max-w-fit flex flex-col gap-y-1 mt-5 mx-auto">
                <label htmlFor="passwordConform" className="ts:text-[20px] text-[15px]">Conform password</label>
                <div className=" max-w-fit flex items-center outline outline-[purple] rounded-md">
                    <ConfirmPassword className="text-[purple] w-6 h-6 ml-2" />
                    <input id="passwordConform" type="text" className="cursor-pointer w-65 ts:w-90 ts:h-10 h-8 px-2 border-none outline-none text-[16px] ts:text-[20px] font-[Arial]" 
                    {...register("conformpassword", { required: "please comform your password" } )} />
                </div>
            </div>
            { errors.conformpassword && <span className="w-full ml-2 text-[red] ts:text-lg text-[14px]">{errors.conformpassword.message}</span>}
            { isPasswordMatched && <span className="w-full ml-2 text-[red]">conform password must be matched</span>}
            <div className="w-full items-end ml-3  mt-4">
                <label htmlFor="checkboxLabel" className=" cursor-pointer text-center"><input id="checkboxLabel" type="checkbox" className="cursor-pointer text-lg scale-none ts:scale-[1.5]"
                {...register("termsandconditions",
                    {
                        required: "you must igree to the terms and conditions"
                    }
                )}
                /> I agree to the <span className="ts:text-lg text-[13px] text-[purple]">Terms & Conditions</span></label>
            </div>
            {errors.termsandconditions && <span className="w-full ml-2 text-[red] ts:text-lg text-[14px]" >{errors.termsandconditions.message}</span>}
            <div className="w-75 ts:w-96 flex h-10 ts:h-14 mt-6 mx-auto">
                <button type="submit" className="w-full bg-[#2e0181] rounded-xl text-white hover:outline hover:outline-[green] duration-250 active:bg-[#1e0155] text-[20px] ts:text-[28px]">Register</button>
            </div>
            <div className="mt-5 justify-center items-center flex">
                <div className="ts:w-40 w-28 border border-[#555555aa]"></div>
                <p className="px-2">OR</p>
                <div className="w-28 ts:w-40 border border-[#494949aa]"></div>
            </div>
            <div className="mt-3 mx-auto cursor-pointer hover:border-[purple] duration-300 flex items-center text-center text-[15px] ts:text-[22px] justify-center gap-x-2 border border-[#1f1f1faa] py-1 ts:py-2 rounded-full w-[calc(100%-10%)] ts:w-[calc(100%-5%)] ">
                continue with
                <GoogleIcon className="w-6 h-6 ts:w-8 ts:h-8" />
            </div>
            <div className="flex max-w-fit mx-auto items-center mt-5">
                <p className="text-[13px] ts:text-lg">Already have an Account?</p>
                <Link to={"/login"} className="hover:border-b h-fit hover:border-[purple] text-[purple] ts:text-lg text-[13px] ml-1">Login</Link>
            </div>
        </form>
    </div>
  )
}
