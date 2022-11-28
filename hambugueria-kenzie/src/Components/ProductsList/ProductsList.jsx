import { ProductCard } from "./ProductCard/ProductCard"
import { StyleListProducts } from "./style"

export const ProductsList = ({ productsList, addProductToCart }) => {
    return (

        <StyleListProducts>
            {productsList.map((product) =>
                <ProductCard key={product.id} product={product} addProductToCart={addProductToCart} />

            )}


        </StyleListProducts>
    )
}