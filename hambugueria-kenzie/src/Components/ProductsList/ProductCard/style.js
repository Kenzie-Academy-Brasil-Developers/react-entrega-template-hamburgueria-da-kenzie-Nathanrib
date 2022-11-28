import styled from "styled-components";


export const StyleCard = styled.li`
display: flex;
flex-direction: column;
border: 1px solid #E0E0E0;
border-radius: 5px;
gap: 14px;
max-width: 260px;
min-width: 260px;

> img {
background-color: #f5f5f5;
width: 100%;
height: 162px;
object-fit: contain;
border-radius: 5px 5px 0px 0px;
}
`

export const StyleCardDescription = styled.div` 
display: flex;
padding: 10px 20px;
flex-direction: column;
gap: 14px;

> h3{
    font-weight: 700;
}
>p{
    font-size: 12px;
    color: #828282;
}
>span{
    color: #27AE60;
    font-size: 14px ;
}
>button{
    background-color: #27ae60;
    color: #fff;
    max-height: 35px;
    padding: 8px 16px;
    border-radius: 8px;
    align-self: flex-start;


}


`