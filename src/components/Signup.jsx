import React, { useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { useMyContext } from "../context/MyContext";

const Signup = () => {

  const { signup } =  useMyContext();
  console.log(signup);
   const usenaavigate = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const msg = await signup(formdata);
      setMessage(msg);
      setFormdata({ name: "", email: "", password: "", role: "" });
      usenaavigate('/login')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className=" relative">
    
      {message && (
          <div className=" absolute top-0 py-2 px-3 shadow-lg rounded-lg left-[50%] translate-x-[-50%] ">
          
          <p className="font-outfit mb-[-7px]">{message}</p>
          
          <span className="w-full h-[2px] bg-blue-900 inline-block"></span>
        </div>
        
      )}
      <div className="container">
        <div className=" max-w-[517px] mx-auto pt-[180px] pb-[192px]">
          <div className="flex items-center gap-4 justify-center pb-[38px]">
            <h2 className=" font-prata font-normal text-[40px] leading-[120px] text-[#414141]">
              Sign Up
            </h2>
            <div className="bg-[#484848] h-[2px] w-[43px]"></div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={formdata.name}
              onChange={(e) =>
                setFormdata({ ...formdata, name: e.target.value })
              }
              placeholder="Name"
              className="font-outfit text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]"
            />
            <input
              type="email"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              placeholder="Email"
              className="font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]"
            />
            <input
              type="password"
              value={formdata.password}
              onChange={(e) =>
                setFormdata({ ...formdata, password: e.target.value })
              }
              placeholder="Password"
              className="font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]"
            />
            <select
              id="role"
              value={formdata.role}
              onChange={(e) =>
                setFormdata({ ...formdata, role: e.target.value })
              }
              className="font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]"
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <div className="flex justify-end w-full pt-[14px]">
              <Link
                to="/login"
                className="font-outfit text-[#3C3C3C] font-normal text-[16px]"
              >
                i have an account already
              </Link>
            </div>
            <input
              type="submit"
              value="Create"
              className="text-white bg-black font-outfit font-light cursor-pointer text-[20px] py-[14px] px-[45px] mt-[41px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
