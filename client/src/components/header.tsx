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
    <div className='absolute items-center py-4 justify-between top-0 left-0 w-full  flex'>
      <img src={appLogo}  className="w-auto cursor-pointer h-5 ml-3 ts:h-12 ts:ml-15"/>
      <div className="flex gap-10 justify-around items-center  mr-12">
        <p className="hover:text-[#242424] hidden  ts:block px-5 rounded-[10px] hover:bg-[#29292913] py-1.5 duration-300 cursor-pointer text-[25px] font-[Arial]">Dashboard</p>
        <p className="hover:text-[#242424] hidden ts:block px-5 rounded-[10px] hover:bg-[#29292913] py-1.5 duration-300 cursor-pointer text-[25px] font-[Arial]">Contact us</p>
        <Link to={"/register"}>
        <button className="hidden ts:block hover:bg-[#43157e] duration-250 px-18 py-2 text-[23px] bg-[#330075] text-white rounded-md cursor-pointer">Login</button>
        </Link>
        <button onClick={() => setDropDown(true)} className="h-10 absolute right-5 ts:hidden block duration-300 active:bg-[#1818181a] px-2 py-3 rounded-full">
          <img className="h-full " src={navDropDown} alt="" />
        </button>
      </div>
    </div>
  )
}
