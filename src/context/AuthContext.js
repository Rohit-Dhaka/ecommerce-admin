import api from "../utils/api";

const { createContext, useContext } = require("react");


const MyContext = createContext(null)




export const ProviderContext = ({children}) =>{
    const signup = async (data) =>{
        try{
            const response = await api.post("admin/signup" , data)
            console.log("Signup response" , response)

        }
        catch(error){
            console.log("signup error" , error)
        }

    }
    const login = async (data) =>{
        try{
            const response = await api.post("admin/login" , data)
            console.log("Logong response" , response)
            const token = response.data.token
            console.log("token" , token)


        }
        catch(error){
            console.log("Login error" , error)
        }
    }
    return(
        <MyContext.Provider value={{signup ,login}}>
            {children}
        </MyContext.Provider>
    )
}

export const UseContext = () => useContext(MyContext)