import styled from "styled-components";


export const StyleCartSection = styled.section`
display: flex;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.8);
position: fixed;
top: 0;
left: 0;
color: #fff;
align-items: center;
justify-content: center;
z-index: 99;


> div { 
display: flex;
width: 250px;
flex-direction: column; 
min-width: 360px;
align-self: center;
position: relative;


>p{
    color: #fff;
    background-color: #27AE60;
    padding: 13px 20px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
}

>button{
    position: absolute;
    top: 15px;
    right: 15px;   
    color: #fff;
    font-weight:600;

}
}
`

export const StyleCartList = styled.ul`
background-color: #F5F5F5;  
display: flex;
flex-direction: column;
padding: 13px 20px;
gap: 25px;
width: 100%
`

export const StyleCartListWithouProduct= styled.div`
background-color: #F5F5F5;  
display: flex;
flex-direction: column;
padding: 55px 20px;
gap: 18px;
align-items: center;

> h2{
    color: #000302;
} 

> p {
    color: #828282;
}
`