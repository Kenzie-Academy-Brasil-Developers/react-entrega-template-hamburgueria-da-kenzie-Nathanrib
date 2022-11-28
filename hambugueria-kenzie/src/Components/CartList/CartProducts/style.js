import styled from "styled-components";

export const StyleListFromCart = styled.li`
display: flex;
gap:15px;
justify-content: space-between;

> img{
width: 30%;
height: 80px;
object-fit: cover;
border-radius: 5px;
}

> div {
    display: flex;
    margin-top: 10px;
    margin-left: -20%;
    flex-direction: column;
    gap: 10px;
}

div> h3 {
    font-size: 14px;
}

div > p {
    font-size: 12px;
    color: #828282;
}

> button{
    align-self: flex-start;
    padding: 10px 0px;
    color: #BDBDBD;
   
}
`