import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useMyContext } from '../../context/MyContext';


const Signup = () => {    
  const { signup } =  useMyContext();
  
  const [formdata, setFormdata] = useState({ name: "", email: "", password: "" });
  const [message , setMessage] = useState("")
  const [bar , setBar] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await signup(formdata);
      console.log(res)
      setMessage(res.message)
         setBar(true)
      setTimeout(() => {
          setMessage("")
          setBar(null)
          navigate('/login')          
      }, 2000);      
    }
   catch (error) {
    console.log(error);
    setMessage(error.response?.data?.message || error.message || "Something went wrong");
  }
    
  };

  return (
    <section className=" h-[90vh]  flex items-center relative">  
    {message && (
      <div className=" absolute py-2 flex  flex-col  gap-2 px-3 rounded-lg shadow-2xl  top-10 left-[50%]  translate-x-[-50%]">
            {message}
            {bar && (

            <span className='bg-blue-500 rounded-lg h-1  w-full  inline-block animate-progress'></span>
            )}
          </div>

    )}
    
        

           
        
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
               value={formdata.name}
               onChange={(e) =>
                 setFormdata({ ...formdata, name: e.target.value })
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
   
           
   
             
               <div className="flex  w-full pt-[14px] pb-11 justify-end">

               
               <Link
                 to="/login"
                 className=" font-poppins"
               >
                 Already have an account
               </Link>
               </div>
   
   
                 <input
               type="submit"
               value="Signup"
               className="text-white bg-[#232323] py-[14px] px-[47px] cursor-pointer"
             />
             
           </form>
          </div>
         </div>
       </section>
  );
};

export default Signup;
