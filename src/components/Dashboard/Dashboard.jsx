import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Plus, FilePlus, Download, Inbox , PackageCheck, User } from "lucide-react";

const Dashboard = () => {
  return (
    <section>
      <div className=" bg-gray-100">
        <div className="flex max-sm:flex-col ">
          <div className="sm:h-screen sm:border-r-[1px] sm:border-black  sm:w-[20%]  max-sm:flex">
            <div className="flex max-sm:flex-row  sm:py-8 lg:px-10 py-2 px-1 flex-col gap-2 max-sm:overflow-x-scroll max-sm:border-b-[1px]  max-sm:border-solid max-sm:border-gray-400  ">
              <NavLink
                to="addproduct"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white bg-black" : "  "
                  }  flex  gap-1 text-nowrap py-2 px-4 rounded-lg font-poppins border-[1px] border-solid border-black `
                }
              >
                <Plus className="w-6 h-6 text-green-600" /> Add Items
              </NavLink>
              <NavLink
                to="getproduct"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white bg-black" : "  "
                  }  flex  gap-1 text-nowrap py-2 px-4 rounded-lg font-poppins border-[1px] border-solid border-black `
                }
              >
                {" "}
                <Inbox className="w-6 h-6 text-orange-600" /> Get Product
              </NavLink>
              <NavLink
                to="getalluser"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white bg-black" : "  "
                  }  flex  gap-1 text-nowrap py-2 px-4 rounded-lg font-poppins border-[1px] border-solid border-black `
                }
              >
                {" "}
                <User className="w-6 h-6 text-blue-600" /> Get All User
              </NavLink>
              <NavLink
                to="allorders"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white bg-black" : "  "
                  }  flex  gap-1 text-nowrap py-2 px-4 rounded-lg font-poppins border-[1px] border-solid border-black `
                }
              >
                {" "}
                <PackageCheck  className="w-6 h-6 text-lime-700" /> All Orders 
              </NavLink>
            </div>
          </div>
          <div className="sm:px-10 sm:py-8 max-sm:p-2 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
