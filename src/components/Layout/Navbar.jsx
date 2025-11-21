import React from 'react';

import { Link } from 'react-router-dom';

import { useMyContext } from '../../context/MyContext';


const Navbar = () => {
  
  const { logout, isLogin } = useMyContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="">
      <div className="container  border-b-[1px] border-solid  border-[#ADADAD]">
        
      <div className=" sm:pt-[29px] pt-[19px] pb-[19px] flex justify-between items-center">
            <Link to="/"  className="z-20 text-[32px]  leading-[40px] uppercase font-semibold">
            
            Shopora
          </Link>

        
        <div className="space-x-4">
          {isLogin ? (
            <button
              onClick={handleLogout}
              className=" font-poppins  bg-black text-white  py-2 px-4 rounded-full"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className=" font-poppins  bg-black text-white  py-2 px-4 rounded-full"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
