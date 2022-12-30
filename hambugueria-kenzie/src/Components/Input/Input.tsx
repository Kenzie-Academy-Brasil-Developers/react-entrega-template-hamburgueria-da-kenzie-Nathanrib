import React from "react";
import {UseFormRegisterReturn, FieldError } from "react-hook-form";
import { StyleFieldset } from "./style";


interface IInputProps{
    id: string,
    label: string,
    type: string,
    register: UseFormRegisterReturn,
    placeholder: string,
    disabled: boolean
    error?: FieldError;

}

export const Input = ({ id, label, type, register, placeholder, disabled, error} : IInputProps) => {
    return (
        <StyleFieldset>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} disabled={disabled} {...register} />
            <p>{error?.message}</p>
        </StyleFieldset>
    )
}