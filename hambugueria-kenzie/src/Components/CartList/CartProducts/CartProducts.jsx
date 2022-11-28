import { StyleListFromCart } from "./style"

export const CartProducts = ({ product, removeProductFromCart }) => {


    return (
        <StyleListFromCart>
            <img src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
            </div>
            <button onClick={() => removeProductFromCart(product.id)}>Remover</button>
        </StyleListFromCart>
    )
}