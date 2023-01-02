import { ProductCard } from "./ProductCard/ProductCard"
import { StyleListProducts } from "./style"

export const ProductsList = ({ addProductToCart, transactionsFiltered }) => {
    return (

        <StyleListProducts>
            {transactionsFiltered?.map((product) =>
                <ProductCard key={product.id} product={product} addProductToCart={addProductToCart} />

            )}


        </StyleListProducts>
    )
}