import styled from "styled-components";


export const StyleCartSection = styled.section`
display: flex;
flex-direction: column;
width: 25%;
min-width: 360px;



>p{
    color: #fff;
    background-color: #27AE60;
    padding: 13px 20px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
}
`

export const StyleCartList = styled.ul`
background-color: #F5F5F5;  
display: flex;
flex-direction: column;
padding: 13px 20px;
gap: 25px;
`

export const StyleCartListWithouProduct= styled.div`
background-color: #F5F5F5;  
display: flex;
flex-direction: column;
padding: 55px 20px;
gap: 18px;
align-items: center;

> p {

    color: #828282;
}
`