import navClose from "../../assets/svgs/navClose.svg";
import { Link } from "react-router-dom"

type Props = {
    setDropDown: (value: boolean) => void;
}
export default function homeNav({ setDropDown }: Props) {
    
  
  return (
    <div className={` navShadow h-max min-w-full absolute  z-50 flex flex-col py-5 bg-[#ffff] `}>
        <button className="absolute top-2 right-2 p-2 w-fit rounded-full active:bg-[#36363617]" onClick={() => setDropDown(false)}>
          <img className="h-4" src={navClose} alt="" />
        </button>
        <p className="border-b border-[#696969aa] w-full ml-2 text-[22px] font-[Arial] text-justify mt-3">Dashboard</p>
        <p className="border-b border-[#696969aa] divide-black w-full ml-2 text-[22px] font-[Arial] text-justify mt-3">Contact us</p>
        <Link to={"/register"} className="ml-3" >
          <button className=" active:bg-[#43157e] duration-250 w-38 mt-6 py-1 text-[18px] text-white  cursor-pointer bg-[#330075] ">Login</button>
        </Link>
    </div>
  );
}
