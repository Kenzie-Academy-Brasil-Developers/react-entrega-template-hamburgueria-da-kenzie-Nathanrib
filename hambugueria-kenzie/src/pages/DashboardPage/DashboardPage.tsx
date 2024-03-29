
import { StyleHeader, StyleIndexPage, StyleMain } from "./style"
import { useEffect ,useContext} from "react"
import { api } from "../../services/api"
import { CartContext, ICartContext } from "../../contexts/CartContext"
import { ProductsList } from "../../Components/ProductsList/ProductsList"
import { Header } from "../../Components/Header/Header"
import { CartList } from "../../Components/CartList/CartList"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"



export const DashboardPage = () => {

    const {setProductsList, cartProductsList, addProductToCart, removeProductFromCart, transactionsFiltered, setFilter} = useContext<ICartContext>(CartContext)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    if (!user) {
        navigate('/')
    }

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



    



    return (
        <StyleIndexPage>
            <StyleHeader>
                <Header setFilter={setFilter}/>
                
            </StyleHeader>
           
            <StyleMain>
                <ProductsList transactionsFiltered={transactionsFiltered} addProductToCart={addProductToCart} />
                <CartList cartProductsList={cartProductsList} removeProductFromCart={removeProductFromCart}/>
            </StyleMain>
        </StyleIndexPage>
    )
}
