import React, { useEffect } from 'react'
import { useMyContext } from '../context/MyContext'

const Getalluser = () => {
    
  const { getAllUsers, users } = useMyContext();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className="py-10">
      
        
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          All Users
        </h3>

        {/* If no users */}
        {users.length === 0 ? (
          <p className="text-gray-600">No users found...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4">
            {users.map((user, i) => (
              <div 
                key={i} 
                className="border p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {user.name}
                  </h4>

                  <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    #{i + 1}
                  </span>
                </div>

                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Email:</span> {user.email}
                </p>

                <p className="text-gray-700 text-sm mt-1">
                  <span className="font-medium">Role:</span> {user.role || "User"}
                </p>
              </div>
            ))}
          </div>
        )}

      
    </section>
  )
}

export default Getalluser
