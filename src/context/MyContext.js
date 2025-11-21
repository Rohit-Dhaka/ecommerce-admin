// src/context/MyContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { baseUrl } from "../api/api";

const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders , setOrders] = useState([])
  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  // -------------------------
  // AUTH
  // -------------------------

  const signup = async (data) => {
    try {
      const response = await api.post("auth/adminsignup", data);
      return response.data;
    } catch (error) {
      console.log("Signup Error:", error);
    }
  };

  const login = async (data) => {
    try {
      const response = await api.post("auth/login", data);

      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsLogin(true);

      return response.data.user;
    } catch (error) {
      console.log("Login Error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };

  // -------------------------
  // PRODUCTS
  // -------------------------

  const addProduct = async (formData) => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.post("products/addproduct", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.log("Add Product Error:", error);
    }
  };

  const getProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("products/getproduct", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data.allproduct);
    } catch (error) {
      console.log("Get Products Error:", error);
    }
  };

  // -------------------------
  // USERS
  // -------------------------

  const getAllUsers = async () => {
      try {
        const token = localStorage.getItem("token");
      const response = await api.get("auth/getalluser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
       return setUsers(response.data.users);
    } catch (error) {
      console.log("Get Users Error:", error);
    }
  };

  const getAllOrders = async () =>{
    try{
        const token = localStorage.getItem('token')
        const response = await api.get('order/getallorder' ,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
     return setOrders(response.data.orders)

    }
    catch(error){
        console.log(error)
    }
  }

 const updateOrder = async (orderId, newStatus) => {
  try {
    const response = await api.put(`order/updateOrder/${orderId}`, {
      status: newStatus,
    });

    // Update UI instantly
    setOrders((prev) =>
      prev.map((order) =>
        order._id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );
    console.log("done")

    return response.data;
  } catch (error) {
    console.log("Update Order Error:", error);
  }
};


  return (
    <MyContext.Provider
      value={{
        // auth
        signup,
        login,
        logout,
        isLogin,

        // products
        addProduct,
        getProducts,
        products,

        // users
        getAllUsers,
        users,

        getAllOrders,
        orders,
        updateOrder

      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
