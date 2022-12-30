import styled from "styled-components"

export const StyleLoginForm = styled.form`
border: 1px solid grey;
display: flex;
flex-direction: column;
gap: 8px;
width: 50%;
align-items: center;
padding: 15px;

> h3{
    align-self: flex-start;
    font-size: 16px;
    margin-bottom: 10px;
  
}
> p{
    font-weight: 400;
    font-size: 14px;
    color: #999999;
    text-align: center;
    margin: 7px 0px 7px 0px;

}
> a {
    display: flex;
text-decoration: none;
background-color: #F5F5F5;
width: 100%; 
color: #999999;
padding: 8px;
border-radius: 4px;
justify-content: center;

}

`