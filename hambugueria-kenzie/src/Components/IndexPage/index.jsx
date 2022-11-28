
import { ProductsList } from "../ProductsList/ProductsList.jsx"
import { Header } from "../Header/Header.jsx"
import { CartList } from "../CartList/CartList.jsx"
import { StyleHeader, StyleIndexPage, StyleMain } from "./style.js"
import { useEffect, useState } from "react"
import { api } from "../../api/api.js"


export const IndexPage = ({ productsList, setProductsList, cartProductsList, addProductToCart, removeProductFromCart }) => {

    const [filter, setFilter] = useState("Todos")


    useEffect(() => {
        (async () => {
            try {
                const response = await api.get("products")
                setProductsList(response.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [setProductsList])



    const transactionsFiltered = productsList.filter(element => {
        if (!filter) {
            return element
        } else {
            return element.category.toLowerCase() === filter.toLowerCase() || element.name.toLowerCase() === filter.toLowerCase()
        }
    })



    return (
        <StyleIndexPage>
            <StyleHeader>
                <Header setFilter={setFilter} />
            </StyleHeader>
            <StyleMain>
                <ProductsList productsList={transactionsFiltered} addProductToCart={addProductToCart} />
                <CartList cartProductsList={cartProductsList} removeProductFromCart={removeProductFromCart} />
            </StyleMain>
        </StyleIndexPage>
    )
}
