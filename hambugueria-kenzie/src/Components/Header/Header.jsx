
import { useState } from "react"
import { StyleHeader, StyleFilter } from "./style"

export const Header = ({ setFilter }) => {

    const [textToSearch, setTextToSearch] = useState()
    return (
        <StyleHeader>
            <h2>Burguer <span>Kenzie</span></h2>
            <StyleFilter>
                <input type="text" onChange={(event) => setTextToSearch(event.target.value)} />
                <button onClick={setFilter(textToSearch)}>Pesquisar</button>
            </StyleFilter>
        </StyleHeader>
    )
}