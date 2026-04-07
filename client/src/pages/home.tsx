import { useState, useEffect } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom"
import NavDropDown from "../components/home/homeNav.tsx";

export default function home() {
  const [isNavBar, setNavBar] = useState<boolean>(false);
    
  return (
    <div className="absolute top-0 w-full h-screen ">
      <div className="  flex w-screen relative h-screen bg-center bg-cover bg-no-repeat to-[white] from-[purple]" style={{ backgroundImage: "url('./hero.svg')"}} >
        <Header setDropDown={setNavBar}/>
      
        <div className="flex w-fit ls:mx-0 mx-auto relative flex-col top-[calc(100vh-80vh)] ">
            <h1 className="leading-tight ls:w-100 px-5 w-80 font-[system-ui] ls:mx-0 max-h-fit duration-300 font-bold text-[35px] ls:text-[45px]">Expense tracking made easy</h1>
            <p className="font-[Arial] text-[22px] px-5  w-85 ls:w-150 mt-5">Tracking your spending, organize your expenses, 
              and gain clear insights into your financial 
              habits - all in onse place.</p>
            <Link to={"/register"} >
              <button className="hover:bg-[#43157e] ml-5 ls:mt-10 ls:w-60  duration-250 w-35 mt-8 ls:py-3 py-1 ls:text-[25px] text-[18px] text-white rounded-md cursor-pointer bg-[#330075] "> Get started</button>
            </Link>
        </div>
      </div>
      {isNavBar && <NavDropDown  setDropDown={setNavBar}/>}
    </div>
  )
}
