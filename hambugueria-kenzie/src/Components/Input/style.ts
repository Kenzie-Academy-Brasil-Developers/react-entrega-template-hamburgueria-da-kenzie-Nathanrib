import styled from "styled-components";

export const StyleFieldset = styled.fieldset`
border: none;
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;
position: relative;


> input {
    width: 100%;
    padding: 8px;
    border: 1.5px solid #343B41;
    background-color: #fff;
    color: #343B41;
    border-radius: 4px;
}

> label {
    background-color: #fff;
    font-size: 12px;
    color: #343B41;
    position: absolute;
    top: -5px;
    left: 8px;
}
`