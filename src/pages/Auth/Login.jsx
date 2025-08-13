import React, { useState } from "react";
import { UseContext } from "../../context/AuthContext";

const Login = () => {
  const { login } = UseContext();
  const [formdata , setFormdata] = useState({email:"" , password:""})

  
  const handleSubmit  = async (e) =>{
    e.preventDefault()
   await  login(formdata)

  }
  return (
    <section>
        
      <div>Login</div>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your Email" value={formdata.email} onChange={(e) => setFormdata({...formdata, email:e.target.value})} />
        <input type="password" placeholder="Enter your Password" value={formdata.password} onChange={(e) => setFormdata({...formdata, password:e.target.value})} />
        <input type="submit" value='Login' />

      </form>
    </section>
  );
};

export default Login;
