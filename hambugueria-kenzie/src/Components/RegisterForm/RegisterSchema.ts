import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória')
})