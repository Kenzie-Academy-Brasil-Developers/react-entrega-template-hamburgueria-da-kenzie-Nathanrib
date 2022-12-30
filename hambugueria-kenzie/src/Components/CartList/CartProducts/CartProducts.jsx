import { StyleListFromCart } from "./style"
import { FaTrash } from 'react-icons/fa'

export const CartProducts = ({ product, removeProductFromCart }) => {


    return (
        <StyleListFromCart>
            <img src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
            </div>
            <FaTrash color="#333333" onClick={() => removeProductFromCart(product.id)}></FaTrash>
        </StyleListFromCart>
    )
}