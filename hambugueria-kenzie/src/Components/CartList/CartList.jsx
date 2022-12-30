import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { CartProducts } from "./CartProducts/CartProducts"
import { CartTotal } from "./CartTotal/CartTotal"
import { StyleCartList, StyleCartListWithouProduct, StyleCartSection } from "./style"

export const CartList = ({ cartProductsList, removeProductFromCart, }) => {

    const { isModalOpen, setIsModalOpen } = useContext(CartContext)



    if (isModalOpen) {
        if (cartProductsList?.length === 0) {
            return (
                <StyleCartSection>
                    <div>
                        <p>Carrinho de compras</p>
                        <button onClick={() => setIsModalOpen(false)}>X</button>

                        <StyleCartListWithouProduct>
                            <h2>Sua sacola está vazia</h2>
                            <p>Adicione itens</p>

                        </StyleCartListWithouProduct>
                    </div>

                </StyleCartSection >

            )
        }
        return (
            <StyleCartSection>
                <div>

                    <p>Carrinho de compras</p>
                    <button onClick={() => setIsModalOpen(false)}>X</button>
                    <StyleCartList>

                        {cartProductsList?.map(product =>
                            <CartProducts key={product.id} product={product} removeProductFromCart={removeProductFromCart} />
                        )}

                    </StyleCartList>
                    {cartProductsList?.length > 0 && <CartTotal cartProductsList={cartProductsList} />}
                </div >
            </StyleCartSection>

        )
    }

    return (
        <div>

        </div>
    )
}