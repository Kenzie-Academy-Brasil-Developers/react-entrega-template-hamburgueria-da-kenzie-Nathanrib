import { CartProducts } from "./CartProducts/CartProducts"
import { CartTotal } from "./CartTotal/CartTotal"
import { StyleCartList, StyleCartListWithouProduct, StyleCartSection } from "./style"

export const CartList = ({ cartProductsList, removeProductFromCart }) => {


    if (cartProductsList.length === 0) {
        return (
            <StyleCartSection>
                <p>Carrinho de compras</p>
                <StyleCartListWithouProduct>
                    <h2>Sua sacola está vazia</h2>
                    <p>Adicione itens</p>

                </StyleCartListWithouProduct>

            </StyleCartSection>

        )
    }
    return (
        <StyleCartSection>
            <p>Carrinho de compras</p>
            <StyleCartList>

                {cartProductsList.map(product =>
                    <CartProducts key={product.id} product={product} removeProductFromCart={removeProductFromCart} />
                )}

            </StyleCartList>
            {cartProductsList.length > 0 && <CartTotal cartProductsList={cartProductsList} />}
        </StyleCartSection>
    )
}