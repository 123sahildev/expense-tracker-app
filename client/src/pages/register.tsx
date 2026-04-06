import { useState, useRef } from "react";
import { useForm } from 'react-hook-form'
import EmailIcon from "../assets/svgs/email.tsx";
import PasswordIcon from "../assets/svgs/password.tsx";
import ConfirmPassword from "../assets/svgs/confirmPassword.tsx";
import PasswordShow from "../assets/svgs/passwordShow.tsx";
import UserName from "../assets/svgs/username.tsx";
import GoogleIcon from "../assets/svgs/googleIcon.tsx";
import gsap from 'gsap';
import axios from "axios";

export default function register() {

  return (
    <form className="flex outline max-w-fit  flex-col mt-[calc(100vh-85vh)] mx-auto bg-white p-10 " >
        <div className="w-full flex flex-col ">
            <h1 className="font-bold text-[30px] text-center  w-full">Register Now</h1>
            <p className="w-full text-[18px]">Welcome please fillfull the all requirements and create your account</p>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
            <label htmlFor="" className="text-[24px] font-[Arial] ">username</label>
            <div className="flex items-center outline outline-[purple] rounded-md px-2">
                <input type="text" className=" border-none outline-none text-[18px] font-[Arial] cursor-pointer w-50 h-11 px-2" />
            </div>
        </div>
        <div className="flex flex-col gap-y-1 mt-5">
            <label htmlFor="" className="text-[24px] font-[Arial] ">Email</label>
            <div className="flex items-center outline outline-[purple] rounded-md px-2">
                <input type="text" className=" border-none outline-none text-[18px] font-[Arial] cursor-pointer w-50 h-11 px-2" />
            </div>
        </div>
        <div className="flex flex-col gap-y-1 mt-5">
            <label htmlFor="" className="text-[24px] font-[Arial] ">Password</label>
            <div className="flex items-center outline outline-[purple] rounded-md px-2">
                <input type="text" className=" border-none outline-none text-[18px] font-[Arial] cursor-pointer w-50 h-11 px-2" />
            </div>
        </div>
    </form>
  )
}
