import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Search from "./search";
import { FaRegCircleUser } from "react-icons/fa6";

function Header() {
  return (
    <header className=" lg:h-20 lg:shadow-md sticky top-0 bg-red-600">
      <div className="container mx-auto flex items-center h-full px-2 justify-between">
        {/**Logo*/}
        <div className="h-full">
          <Link to={"/"} className="h-full flex justify-center items-center">
            <img src={logo} 
            alt="Logo"
            width={170}
            height={60}
            className="hidden lg:block"
             />
             <img src={logo} 
            alt="Logo"
            width={120} 
            height={60}
            className=" lg:hidden"
             />
          </Link>
        </div>

        {/**Search*/}
        <div className='hidden lg:block'>
         <Search/>
        </div>

        {/**Login and My cart*/}
        <div className=''>
          <button className='text-neutral-600 lg:hidden'>
            <FaRegCircleUser size={25}/>
          </button>
        <div className='hidden lg:block '>
          Login and Cart
        </div>
      </div>
        </div>
        <div className="container mx-auto px-2 lg:hidden">
          <Search/>
        </div>
        
    </header>
  );
}

export default Header;
