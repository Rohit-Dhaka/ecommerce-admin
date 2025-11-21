import React from 'react'
import {Outlet} from 'react-router-dom'
import Slidebar from './Slidebar'

const Dashboard = () => {
  return (
    <section>
        <div className="flex">
            <Slidebar/>
            <div className=" bg-gray-100 w-full pt-10 ps-8">

            <Outlet/>
            </div>
        </div>
    </section>
  )
}

export default Dashboard