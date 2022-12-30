import styled from "styled-components";

export const StyleCartDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #f5f5f5;
border-top: 1px solid  #E0E0E0;
border-radius: 0px 0px 5px 5px;


>button {
    background-color: #E0E0E0;
    color: #828282;
    width: 90%;
    padding: 20px 113px;
    align-self: center;
    border-radius: 8px;
    margin-bottom: 20px;
}
`

export const StyleCartTotal = styled.div`
display: flex;
justify-content: space-between;
padding: 13px 20px;

>p{
    font-weight: 600;
    color: #333333  ;
}
> span {
    font-size: 14px;
    font-weight: 500;
    color: #828282
}
`