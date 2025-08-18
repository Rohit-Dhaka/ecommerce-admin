import React, { useState } from 'react';
import { UseContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { signup } = UseContext();
  const [formdata, setFormdata] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formdata);
  };

  return (
    <section className=" h-screen flex items-center">
         <div className="container">
          <div className=" flex  flex-col  items-center   ">
            <div className="flex items-center gap-2 pb-[38px]">
              <h3 className=" font-prata font-normal text-[40px] text-[#414141]">Sign Up</h3>
           <span className="h-[2px] w-[43px] bg-[#484848]"></span>
           </div>
           <form onSubmit={handleSubmit} className=" flex flex-col   items-center max-w-[517px] w-full ">
               <input
               type="text"
               placeholder="Name"
               value={formdata.email}
               onChange={(e) =>
                 setFormdata({ ...formdata, email: e.target.value })
               }
               className=" py-[13px] px-[14px] border-[1px] border-solid border-[#484848] text-[#484848] w-full mb-[24px]"
               required
             />
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
   
           
   
             
               
               <Link
                 to="/login"
                 className=" font-poppins text-end   w-full pt-[14px] pb-11"
               >
                 Already have an account
               </Link>
   
   
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

export default Signup;
