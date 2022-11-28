import { StyleCard, StyleCardDescription } from "./style"

export const ProductCard = ({ product, addProductToCart }) => {
    return (
        <StyleCard>
            <img src={product.img} alt="" />
            <StyleCardDescription>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <span>R$ {product.price}</span>
                <button onClick={() => addProductToCart(product)} > Adicionar</button>
            </StyleCardDescription>
        </StyleCard >
    )
}