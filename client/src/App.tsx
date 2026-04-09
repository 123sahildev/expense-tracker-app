import Home from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/register"
import Login from "./pages/login"

export default function App() {
   return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="Login" element={<Login />} />
         </Routes>
      </BrowserRouter>
    </>
   )
}