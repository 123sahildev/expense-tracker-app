import type React from "react";
import appLogo from "../../public/logo.svg";
import navDropDown from ".././assets/navDropDown.svg";
import type { JSX } from "react";
import { Link } from "react-router-dom"

type Props = {
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>
}

export default function header({ setDropDown }: Props ): JSX.Element {
  return (
    <div className='absolute items-center py-3 justify-between top-0 left-0 w-full flex'>
      <img src={appLogo}  className="w-auto cursor-pointer h-5 ml-3 ts:h-8 tl:h-9 ls:ml-8 ts:ml-3 "/>
      <div className="flex tl:gap-x-5 gap-x-2 justify-around items-center  tl:mr-8 mr-6">
        <p className="hover:text-[#242424] hidden  ts:block px-3 rounded-[10px] hover:bg-[#29292913] py-1 duration-300 cursor-pointer lxl:text-[24px] ls:text-[18px] text-[20px] font-[Arial]">Dashboard</p>
        <p className="hover:text-[#242424] hidden ts:block px-3 rounded-[10px] hover:bg-[#29292913] py-1 duration-300 cursor-pointer lxl:text-[24px] ls:text-[18px] text-[20px] font-[Arial]">Contact us</p>
        <Link to={"/register"}>
        <button className="hidden ts:flex hover:bg-[#43157e] duration-250 tl:px-8 ls:px-10 px-7 tl:py-1 py-1 text-[20px] bg-[#330075] text-white rounded-xl cursor-pointer">Login</button>
        </Link>
        <button onClick={() => setDropDown(true)} className="h-10 absolute right-5 ts:hidden block duration-300 active:bg-[#1818181a] px-2 py-3 rounded-full">
          <img className="h-full " src={navDropDown} alt="" />
        </button>
      </div>
    </div>
  )
}
