
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { UserContext } from "../../contexts/UserContext"
import { StyleHeader, StyleFilter } from "./style"
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { BsCart2 } from 'react-icons/bs'

export const Header = ({ setFilter }) => {

    const { logout } = useContext(UserContext)
    const { setIsModalOpen } = useContext(CartContext)


    const [textToSearch, setTextToSearch] = useState()
    return (
        <StyleHeader>
            <h2>Burguer <span>Kenzie</span></h2>
            <StyleFilter>
                <input type="text" onChange={(event) => setTextToSearch(event.target.value)} />
                <button onClick={setFilter(textToSearch)}>Pesquisar</button>
            </StyleFilter>
            <div>
                <RiLogoutBoxRLine onClick={() => logout()} ></RiLogoutBoxRLine>
                <BsCart2 onClick={() => setIsModalOpen(true)}></BsCart2>
            </div>
        </StyleHeader>
    )
}