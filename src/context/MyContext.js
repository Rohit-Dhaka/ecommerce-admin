import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../utils/api";

const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  const signup = async (data) => {
    try {
      const response = await api.post("admin/adminsignup", data);
      return response.data;
    } catch (error) {
      console.log("Signup Error:", error);
    }
  };

  const login = async (data) => {
    try {
      const response = await api.post("admin/login", data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsLogin(true);
      return response.data;
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

  const addProduct = async (formData) => {
    try {
      const response = await api.post("products/addproduct", formData);
      console.log("add products response", response.data);

      return response.data;
    } catch (error) {
      console.log("Add Product Error:", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await api.get("products/getproduct");

      setProducts(response.data.allproduct);
    } catch (error) {
      console.log("Get Products Error:", error);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await api.get("auth/getalluser");
      return setUsers(response.data.users);
    } catch (error) {
      console.log("Get Users Error:", error);
    }
  };

  const getAllOrders = async () => {
    try {
      const response = await api.get("order/getallorder");
      return setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrder = async (orderId, newStatus) => {
    try {
      const response = await api.put(`order/updateOrder/${orderId}`, {
        status: newStatus,
      });

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      console.log("done");

      return response.data;
    } catch (error) {
      console.log("Update Order Error:", error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        signup,
        login,
        logout,
        isLogin,
        addProduct,
        getProducts,
        products,
        getAllUsers,
        users,
        getAllOrders,
        orders,
        updateOrder,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
