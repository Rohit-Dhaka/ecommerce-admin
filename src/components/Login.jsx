import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useMyContext } from '../context/MyContext'


const Login = () => {

  const {login} = useMyContext();
  const navigate = useNavigate()

  const [ formdata , setFormdata] = useState({email:"" , password:''})

  const handleSubmit = async (e) =>{
    e.preventDefault()    
    try{
      const user = await login(formdata);
      setFormdata({email:"" , password:''});
      if (user.role === "admin") {
        navigate('/dashboard');
      } else if (user.role === "user") {
        
        window.location.href = "http://localhost:3000/login";
      } else {
        alert("Invalid role. Please contact support.");
      }
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <section>
        <div className="container">
        <div className=" max-w-[517px] mx-auto pt-[180px] pb-[192px]">
              <div className="flex items-center gap-4 justify-center pb-[38px]">
              <h2 className=' font-prata font-normal text-[40px] leading-[120px] text-[#414141]'>Login</h2>
            <div className="bg-[#484848] h-[2px] w-[43px]"></div>
          </div>
            <form  className='flex flex-col items-center' onSubmit={handleSubmit}>
            
                <input type="email" value={formdata.email} onChange={(e) => setFormdata({...formdata, email:e.target.value})}  placeholder='Email' className='font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]'/> 
                <input type="password"  value={formdata.password}  onChange={(e) => setFormdata({...formdata , password:e.target.value})} placeholder='Password' className='font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]'/> 
                <div className="flex justify-between w-full pt-[14px]">
                    <Link to='/forgot' className='font-outfit text-[#3C3C3C] font-normal text-[16px]'>Forgot your password?</Link>
                    <Link to='/signup' className='font-outfit text-[#3C3C3C] font-normal text-[16px]'>Create account</Link>
                </div>
                <input type="submit" value='Login' className='text-white bg-black font-outfit font-light text-[20px] py-[14px] px-[45px] mt-[41px]' />
            </form>
        </div>
        </div>
    </section>
  )
}

export default Login