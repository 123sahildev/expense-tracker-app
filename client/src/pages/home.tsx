import { useState, useEffect } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom"

export default function home() {

    
  return (
    <div className="absolute top-0 flex  bg-center inset-0 left-0 w-screen h-full bg-cover" style={{ backgroundImage: "url('/hero.svg')"}}>
      <Header />
      <div className="flex w-150 flex-col absolute left-30 top-[calc(100vh-70vh)] ">
          <h1 className="leading-tight font-[system-ui] max-h-fit w-100 font-bold text-[45px]">Expense tracking made easy</h1>
          <p className="font-[Arial] text-[25px] w-full mt-5">Tracking your spending, organize your expenses, 
            and gain clear insights into your financial 
            habits - all in onse place.</p>
          <Link to={"/register"} ><button className="hover:bg-[#43157e] mt-10 duration-250 w-60 py-3 text-[25px] text-white rounded-md cursor-pointer bg-[#330075] "> Get started</button></Link>
      </div>
    </div>
  )
}
