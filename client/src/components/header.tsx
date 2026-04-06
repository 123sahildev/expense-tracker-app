import appLogo from "../../public/logo.svg";

export default function header() {
  return (
    <div className='absolute items-center py-4 justify-between top-0 left-0 w-full  flex'>
      <img src={appLogo}  className="w-auto cursor-pointer h-10 ml-15"/>
      <div className="flex gap-10 justify-around items-center  mr-12">
        <p className="hover:text-[#242424] px-5 rounded-[10px] hover:bg-[#29292913] py-1.5 duration-300 cursor-pointer text-[25px] font-[Arial]">Dashboard</p>
        <p className="hover:text-[#242424] px-5 rounded-[10px] hover:bg-[#29292913] py-1.5 duration-300 cursor-pointer text-[25px] font-[Arial]">Contact us</p>
        <button className=" hover:bg-[#43157e] duration-250 px-18 py-2 text-[23px] bg-[#330075] text-white rounded-md cursor-pointer">Login</button>
      </div>
    </div>
  )
}
