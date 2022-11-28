import { StyleCartDiv, StyleCartTotal } from "./style"

export const CartTotal = ({ cartProductsList }) => {

    const amountList = cartProductsList.map((element) => {
        return element.price
    })

    const totalAmount = amountList.reduce((accumulator, element) => {
        return accumulator + element
    })


    if (cartProductsList.length === 0) {
        return (
            <div>
                <h2>Seu carrinho esta vazia</h2>
                <p>Adicione itens</p>
            </div>
        )
    }
    return (
        <StyleCartDiv>
            <StyleCartTotal>
                <p>Total</p>
                <span>R$ {totalAmount}</span>
            </StyleCartTotal>
            <button> Remover Todos </button>
        </StyleCartDiv>
    )
}