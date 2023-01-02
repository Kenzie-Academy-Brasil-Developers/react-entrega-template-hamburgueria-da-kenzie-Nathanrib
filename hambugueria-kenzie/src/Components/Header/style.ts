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
    align-items: center;
    padding: 20px 15px;
    
  
    > div:first-of-type{
        position: absolute;
        bottom: 25px;
        display: flex;
        align-items: center;
        background-color: #f5f5f5;
        padding: 25px;
        width: 100vw;
        margin-left: -15px;

    > input {
        width: 200px;
        padding: 10px;
    }
    > button{
        padding: 7px 6px;
        font-size: 12px;
        width: max-content
    }
    }

    
}

`

export const StyleFilter = styled.div `
display: flex;
justify-content: space-between;



>input{
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    width: 365px;
    position: relative;
    left: 25%;

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

}

@media (max-width: 900px){
display: flex;
justify-content: center;

> input {
     left: 5rem;

}
}
`