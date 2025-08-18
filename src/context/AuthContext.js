import { useNavigate } from "react-router-dom";
import api from "../utils/api";

import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext(null);

export const ProviderContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [products , setProducts] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);
  const signup = async (data) => {
    try {
      const response = await api.post("admin/signup", data);
      console.log("Signup response", response);
      navigate("/login");
    } catch (error) {
      console.log("signup error", error);
    }
  };
  const login = async (data) => {
    try {
      const response = await api.post("admin/login", data);
      console.log("Logong response", response);
      const token = response.data.token;
      console.log("token", token);
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/dashboard");
    } catch (error) {
      console.log("Login error", error);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };

  const addproduct = async (data) =>{
    try{
      const token = localStorage.getItem("token")
      const response = await api.post("products/addproduct", data , {
        headers: {
          Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
      })
      console.log(response)
    }
    catch(error){
      console.log("addproduct error" , error)
    }
  }
  const getproduct = async (data) =>{
    try{
      const token = localStorage.getItem("token")
      const response = await api.get('products/getproduct' , {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
      setProducts(response.data.allproduct)

    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <MyContext.Provider value={{ signup, login, logout, isLogin  , addproduct  ,getproduct, products}}>
      {children}
    </MyContext.Provider>
  );
};

export const UseContext = () => useContext(MyContext);
