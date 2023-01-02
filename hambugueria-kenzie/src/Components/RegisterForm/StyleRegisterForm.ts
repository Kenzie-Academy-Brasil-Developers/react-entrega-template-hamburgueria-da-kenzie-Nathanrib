import styled from "styled-components"

export const StyleRegisterForm = styled.form`

border: 1px solid grey;
display: flex;
flex-direction: column;
gap: 8px;
width: 50%;
min-width: 250px;
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
> div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

> a {
display: flex;
color: #999999;
font-size: 12px;
padding: 8px;
border-radius: 4px;
justify-content: center;

}
}

`