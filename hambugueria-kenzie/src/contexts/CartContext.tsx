import { toast} from "react-toastify";
import React, { createContext, useState} from "react";

interface ICartProviderProps {
    children: React.ReactNode 
  }

export interface IProductsList {
      id: number,
      name: string,
      category: string,
      price: number,
      img: string
  }
export interface ICartContext {

  setProductsList: React.Dispatch<React.SetStateAction<IProductsList[]>>,
  productsList: IProductsList[],
  cartProductsList: IProductsList[],
  addProductToCart: (product:IProductsList) => void,
  removeProductFromCart:  (productID: number) => void
  setIsModalOpen:  React.Dispatch<React.SetStateAction<boolean>>
  isModalOpen: boolean;

}


  export const CartContext = createContext({} as ICartContext) 

  export const CartProvider = ({ children}: ICartProviderProps) => {

    const [productsList, setProductsList] = useState<IProductsList[]>([]) 
    const [cartProductsList, setCartProdcutsList] = useState<IProductsList[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

  function addProductToCart (product:IProductsList){
    if(!cartProductsList.some(element => element.id === product.id)){
      setCartProdcutsList([...cartProductsList,product])
      toast.success("Item adicionado ao carrinho")
    } else(
      toast.error("Este item ja foi adicionado")
    )
    
  }
  function removeProductFromCart (productID: number){
    console.log(productID)
    const newProductsList = cartProductsList.filter((product)=> product.id !== productID)
    setCartProdcutsList(newProductsList)
    toast.warn("O item foi removido do carrinho")
  }


  return( 
    <CartContext.Provider value={{ setProductsList, productsList, cartProductsList, addProductToCart, removeProductFromCart, isModalOpen, setIsModalOpen }}>
      {children}
    </CartContext.Provider>

  )

}