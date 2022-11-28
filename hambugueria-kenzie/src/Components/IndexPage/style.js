import styled from "styled-components";


export const StyleIndexPage = styled.section`
width: 100vw;
min-height: 100vh;

` 

export const StyleHeader = styled.div`
display: flex;
background-color: #f5f5f5;

@media (max-width: 900px){
   
    display: flex;
    flex-direction: column;

    
}
`

export const StyleMain = styled.main`
width: 100vw;
display: flex;
gap: 60px;
padding: 32px 115px;

@media (max-width: 900px){
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px 15px;
    
}
`

