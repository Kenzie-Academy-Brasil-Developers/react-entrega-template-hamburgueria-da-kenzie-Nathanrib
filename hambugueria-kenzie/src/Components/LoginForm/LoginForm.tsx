import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"
import { StyleLoginForm } from "./StyleLoginForm"
import { ILoginForm, UserContext } from "../../contexts/UserContext"
import React, { useContext, useState} from "react"
import { Input } from "../Input/Input"
import { Link } from "react-router-dom";
import { ButtonConfirm } from "../ButtonConfirm/ButtonConfirm"




export const LoginForm = () => {

    const [loading, setLoading] = useState(false);

    const { userLogin } = useContext(UserContext)
    

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
        resolver: yupResolver(loginSchema)

    })

 

    const submit: SubmitHandler<ILoginForm> = (data) => {
        console.log(data)
        userLogin (data, setLoading)
       
    }
    
    

    const buttonMessage = loading ? "Entrando" : "Entar"
    return(

                <StyleLoginForm onSubmit={handleSubmit(submit)}>
                    <h3>Login</h3>
                       <Input
                            id="email"
                            label="E-mail"
                            type="text"
                            placeholder="Seu e-mail"
                            register={register("email")}           
                            error={errors.email}
                            disabled={loading} 
                        />
                    
                    <Input
                                id="password"
                                label="Senha"
                                type="password"
                                placeholder="Sua senha"
                                register={register("password")}
                                error={errors.password}
                                disabled={loading}
                            />
                    <ButtonConfirm
                     type="submit"
                     disabled={loading}
                    text={buttonMessage} />
                    <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                    <Link to='/register'>Cadastre-se</Link>
                </StyleLoginForm>
            
   
    )
}


