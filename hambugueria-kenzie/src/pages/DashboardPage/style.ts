import styled from "styled-components";


export const StyleIndexPage = styled.section`
width: 100vw;
min-height: 100vh;

` 

export const StyleHeader = styled.div`
display: flex;
background-color: #f5f5f5;
width: 100%;

`

export const StyleMain = styled.main`
width: 100vw;
display: flex;
gap: 60px;
justify-content: center;
align-items: center ;

@media (max-width: 900px){
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    padding: 5px 15px;
    
}
`

