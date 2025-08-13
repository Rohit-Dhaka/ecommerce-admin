import React, { useState } from 'react'
import { UseContext } from '../../context/AuthContext'

const Signup = () => {
    const {signup} = UseContext()
    const [formdata, setFormdata] = useState({name:"" , email:"" , password:""})

    const handleSubmit = async (e) =>{
        e.preventDefault()
        signup(formdata)    
        // setFormdata({name:"" , email:"" , password:""})          
    }
  return (
    <section>
        Signup
        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name'  value={formdata.name} onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} />
            <input type="email" placeholder='Enter your email' value={formdata.email} onChange={(e) => setFormdata({...formdata,email:e.target.value})} />
            <input type="password" placeholder='Enter your password' value={formdata.password} onChange={(e) => setFormdata({...formdata,password:e.target.value})} />
            <input type="submit" value='Signup' />


        </form>
    </section>
  )
}

export default Signup