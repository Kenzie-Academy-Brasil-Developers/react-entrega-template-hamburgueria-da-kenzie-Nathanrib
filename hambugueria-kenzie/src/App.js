import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IndexPage } from "./Components/IndexPage";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [productsList, setProductsList] = useState([]) 
  const [cartProductsList, setCartProdcutsList] = useState([])
  
  function addProductToCart (product){
    if(!cartProductsList.some(element => element.id === product.id)){
      setCartProdcutsList([...cartProductsList,product])
      toast.success("Item adicionado ao carrinho")
    } else(
      toast.error("Este item ja foi adicionado")
    )
    
  }
  function removeProductFromCart (productID){
    console.log(productID)
    const newProductsList = cartProductsList.filter((product)=> product.id !== productID)
    setCartProdcutsList(newProductsList)
    toast.warn("O item foi removido do carrinho")
  }

  return (

   
    <div className="App">
      <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      
      <GlobalStyle/>
      <IndexPage 
      setProductsList={setProductsList}
      productsList={productsList}
      cartProductsList={cartProductsList}
      addProductToCart={addProductToCart}
      removeProductFromCart={removeProductFromCart}
       />
    </div>
  );
}

export default App;
