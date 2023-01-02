import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterSchema } from "./RegisterSchema"
import { StyleRegisterForm } from "./StyleRegisterForm"
import { IRegisterForm, UserContext } from "../../contexts/UserContext"
import { useContext, useState} from "react"
import { Input } from "../Input/Input"
import { Link } from "react-router-dom";
import { ButtonConfirm } from "../ButtonConfirm/ButtonConfirm"




export const RegisterForm = () => {

    const { registerRequest} = useContext(UserContext)
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>({

        resolver: yupResolver(RegisterSchema)

    })

    const submit: SubmitHandler<IRegisterForm> = (data) => {
        registerRequest(data, setLoading)
    
    }
    const buttonMessage = loading ? "Cadastrando" : "Cadastrar"
    return(

                <StyleRegisterForm onSubmit={handleSubmit(submit)}>
                    <div>
                    <h3>Cadastro</h3>
                    <Link to='/'>Retornar para login</Link>
                    
                    </div>
                   
                    <Input
                            id="name"
                            label="Nome"
                            type="text"
                            placeholder="Seu nome"
                            register={register("name")}           
                            error={errors.name}
                            disabled={loading} 
                        />
                
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
                
                    
                </StyleRegisterForm>
            
   
    )
}