import styled from "styled-components";



export const StyleRegisterPage = styled.section`
width: 100vw;
height: 100vh;
display: flex;  
padding: 20px 210px;
align-items: center;
justify-content: center;




> div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
    margin: 15px 60px;
    > svg {
        max-width: 100%;
        min-width: 250px;
    }
}

> div > h2 > span {
    color: #EB5757;
    font-size: 16px;
}   	


@media (max-width: 900px){
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   >div{
   width: max-content;
   }
> div > svg{
    display: none;
}
}
`