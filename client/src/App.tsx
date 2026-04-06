import Home from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/register"

export default function App() {
   return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
         </Routes>
      </BrowserRouter>
    </>
   )
}