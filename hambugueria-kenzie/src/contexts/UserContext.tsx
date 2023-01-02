import { createContext, useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IUserProviderProps {
    children: React.ReactNode 
  }
export interface ILoginForm{
    email: string
    password: string
}
export interface IRegisterForm{
    name: string
    email: string
    password: string
}

interface IUser{
    email: string;
    name: string;
    id: string;

}

export interface IUserLoginResponse {
    user: IUser;
    accessToken: string;
}


export interface IUserContext{

       user: IUser | null;
       userLogin: (formLoginData: ILoginForm, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
       registerRequest: (formResgiterData: IRegisterForm, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
       logout: () => void;
       loading: boolean;
    

      
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    

    async function userLogin (formLoginData:ILoginForm , setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
        try {
            setLoading(true)
            const response = await api.post<IUserLoginResponse>("login ", formLoginData)

            const { accessToken, user: userResponse } = response.data


            setUser(userResponse)
            localStorage.setItem('@token', accessToken)
    

            navigate("/dashboard")


        } catch (error:any) {
        
            toast.error(error.response?.data)

        } finally {
            setLoading((false))
        }
    }

    
    

    function logout() {
        localStorage.removeItem('@token')
        localStorage.removeItem('@USER')
        setUser(null)
        navigate('/')
    }


    async function registerRequest(formResgiterData: IRegisterForm , setLoading: React.Dispatch<React.SetStateAction<boolean>>) {

        try {
            setLoading(true)
            const response = await api.post("users", formResgiterData)
            toast.success("Usuário criado com sucesso")
            
            navigate('/')

        } catch (error:any) {
        
            toast.error(error.response?.data)
           

        } finally {
            setLoading((false))
        }
    }

    


    return (
        <UserContext.Provider value={{ user, userLogin, logout, registerRequest, loading}}>
            {children}
        </UserContext.Provider>
    )
}