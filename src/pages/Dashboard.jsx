import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <section>
        <div className=" bg-gray-100">
            <div className="flex">
                <div className="h-screen border-r-[1px] border-black  w-[20%] ">
                  <div className="flex  py-8 px-10 flex-col gap-2">

                  <NavLink to='addproduct' className={({isActive}) => `${isActive ? 'text-white bg-black' : '  '}  py-2 px-4 rounded-lg font-poppins border-[1px] border-solid border-black `}>Add Items</NavLink>
                  <NavLink to='getproduct' className={({isActive}) => `${isActive ? 'text-white bg-black' : '  '}  py-2 px-4 rounded-lg font-poppins border-[1px] border-solid border-black `}>Get Product</NavLink>
                  </div>
                </div>
                <div className="px-10 py-8 w-full">
                  <Outlet/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard 


