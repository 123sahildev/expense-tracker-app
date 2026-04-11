import { useState, useEffect } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom"
import NavDropDown from "../components/home/homeNav.tsx";

export default function home() {
  const [isNavBar, setNavBar] = useState<boolean>(false);
  const [isLand, setPage] = useState<boolean>(false);

  useEffect(() =>  {
    setPage(true);
  }, []);
    
  return (
    <>
      <div className="absolute top-0 w-screen h-auto ">
        <div className=" flex overflow-x-hidden w-screen relative h-screen  bg-center bg-cover bg-no-repeat to-[white] from-[purple]" style={{ backgroundImage: "url('./hero.svg')"}} >
          <Header setDropDown={setNavBar}/>
        
          <div className={`flex w-fit ts:ml-[calc(100vw-90vw)] px-5 mx-auto relative flex-col top-[calc(100vh-70vh)] ${isLand ? "translate-y-0 opacity-100" : "translate-y-15 opacity-0"} duration-1500 `}>
          
              <h1 className="leading-tight ts:w-100 px-5 w-auto ml:w-80 font-[system-ui]   max-h-fit duration-300 font-bold text-[35px] ts:text-[45px]">Expense tracking made easy</h1>
              <p className="font-[Arial] text-[22px] px-5 w-full  mx-auto ts:w-160 mt-5">Tracking your spending, organize your expenses, 
                and gain clear insights into your financial 
                habits - all in onse place.</p>
              <Link to={"/register"} >
                <button className="hover:bg-[#43157e] ml-5 ts:mt-10 lxl:w-50 duration-250 ts:w-40  w-37 mt-8 lxl:py-2.5 ts:py-2 py-1.5 ts:text-[20px] lxl:text-[25px] text-[18px] text-white rounded-md cursor-pointer bg-[#330075] "> Get started</button>
              </Link>
          </div>

        </div>
        
      </div>
      {isNavBar && <NavDropDown  setDropDown={setNavBar}/>}
    </>
  )
}
