import styled from "styled-components";

export const StyleListProducts = styled.ul`
display: flex;
gap: 20px;
width: 70%;
flex-wrap: wrap;

@media (max-width: 900px){
    display: flex;
    align-self: flex-start;
    width: 150%;
    flex-wrap: nowrap;
    gap: 15px;
    padding: 10px;
    overflow-x: scroll;
    
}


`
