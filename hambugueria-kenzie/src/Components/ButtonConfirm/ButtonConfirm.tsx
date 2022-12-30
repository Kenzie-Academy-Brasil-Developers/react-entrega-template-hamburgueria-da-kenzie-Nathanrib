import { StyledButton } from "./style"

interface IButtonprops {
    type: any
    disabled: boolean,
    text: string
}

export const ButtonConfirm = ({ type, disabled, text  }: IButtonprops) => {
    return (
        <StyledButton type={type} disabled={disabled}>{text}</StyledButton>
    )
}