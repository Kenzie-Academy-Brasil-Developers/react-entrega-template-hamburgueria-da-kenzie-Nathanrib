import styled from "styled-components";

export const StyleHeader = styled.header`
width: 100%;
padding: 20px 120px;
display: flex;
justify-content: space-between;
align-items: center;

>h2>span{
    color: #EB5757;
    font-size: 16px;
}

> div {
    display: flex;
    gap: 8px;
    > svg {
        cursor: pointer;
    }
}
@media (max-width: 900px){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px 15px;
   
    
}

`

export const StyleFilter = styled.div `
display: flex;
justify-content: space-between;

@media (max-width: 900px){
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 0;
}

>input{
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    width: 365px;
    position: relative;
    left: 25%;

    
@media (max-width: 900px){
position: relative;
left: 15%;
align-self: center;
}
    
}

> button{
    position: relative;
    z-index: 99;
    background-color: #27ae60;
    color: #fff;
    max-height: 35px;
    padding: 8px 20px;
    border-radius: 8px;
    align-self: center;

    @media (max-width: 900px){
    position: relative;
    right: 15%;
    align-self: center;
    }

}
`