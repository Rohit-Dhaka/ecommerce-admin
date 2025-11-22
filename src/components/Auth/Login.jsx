import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useMyContext } from "../../context/MyContext";
import MessageBar from "../common/MessageBar";

const Login = () => {
  const { login } = useMyContext();
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [bar, setBar] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formdata);
      setMessage(res.message);
      setBar(true);
      setTimeout(() => {
        setMessage("");
        setBar(false);
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" h-[90vh] flex items-center relative ">
      <MessageBar message={message} showBar={bar} />

      <div className="container">
        <div className=" flex  flex-col  items-center  ">
          <div className="flex items-center gap-2 pb-[38px]">
            <h3 className=" font-prata font-normal text-[40px] text-[#414141]">
              Login
            </h3>
            <span className="h-[2px] w-[43px] bg-[#484848]"></span>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col   items-center max-w-[517px] w-full "
          >
            <input
              type="email"
              placeholder="Email"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              className=" py-[13px] px-[14px] border-[1px] border-solid border-[#484848] text-[#484848] w-full mb-[24px]"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={formdata.password}
              onChange={(e) =>
                setFormdata({ ...formdata, password: e.target.value })
              }
              className="py-[13px] px-[14px] border-[1px] border-solid border-[#484848] text-[#484848] w-full"
              required
            />

            <div className="flex justify-end w-full pt-[14px] pb-11">
              <Link to="/signup" className=" font-poppins   ">
                Create account
              </Link>
            </div>

            <input
              type="submit"
              value="Login"
              className="text-white bg-[#232323] py-[14px] px-[47px] cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
