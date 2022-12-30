
import { StyleHeader, StyleIndexPage, StyleMain } from "./style"
import { useEffect, useState ,useContext} from "react"
import { api } from "../../services/api"
import { CartContext, ICartContext } from "../../contexts/CartContext"
import { ProductsList } from "../../Components/ProductsList/ProductsList"
import { Header } from "../../Components/Header/Header"
import { CartList } from "../../Components/CartList/CartList"



export const DashboardPage = () => {

    const {setProductsList, productsList, cartProductsList, addProductToCart, removeProductFromCart} = useContext<ICartContext>(CartContext)
    

    
    const [filter, setFilter] = useState("Todos")


    useEffect(() => {
        
        (async () => {
            const token = localStorage.getItem("@token");
            try {
                const response = await api.get("products",{ 
                headers: {
                    "Authorization": `Bearer ${token}`
                    
                }})

                setProductsList(response.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [setProductsList])



    const transactionsFiltered = productsList?.filter(element => {
        if (!filter) {
            return element
        } else {
            return element.category.toLowerCase() === filter.toLowerCase() || element.name.toLowerCase() === filter.toLowerCase()
        }
    })



    return (
        <StyleIndexPage>
            <div>
            <StyleHeader>
                <Header setFilter={setFilter}/>
                
            </StyleHeader>
            </div>
            <StyleMain>
                <ProductsList productsList={transactionsFiltered} addProductToCart={addProductToCart} />
                <CartList cartProductsList={cartProductsList} removeProductFromCart={removeProductFromCart}/>
            </StyleMain>
        </StyleIndexPage>
    )
}
