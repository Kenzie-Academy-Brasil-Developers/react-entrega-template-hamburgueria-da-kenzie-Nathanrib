import styled from "styled-components";

export const StyleListProducts = styled.ul`
align-self: center;
display: flex;
gap: 20px;
width: 65%;
flex-wrap: wrap;
margin-top: 35px;


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
