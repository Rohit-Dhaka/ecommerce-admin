import React from 'react';
import { UseContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Logo } from '../common/icon';

const Navbar = () => {
  const { logout, isLogin } = UseContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="">
      <div className="container  border-b-[1px] border-solid  border-[#ADADAD]">
        
      <div className=" pt-[29px] pb-[19px] flex justify-between">
          <Link to="/" className="">
          <Logo/>
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
