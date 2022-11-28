import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
        font-family: 'Inter', sans-serif;
    }

ul, ol, li{
    list-style: none;
}



button{
    cursor: pointer;
    border: none;
    background-color: transparent;
}
:root{
    --color-primary: #27AE60
    --color-primary-light: #93D7AF|
    --color-secundary: #EB5757|
    --color-grey100: #333333
    --color-grey200: #828282
    --color-grey300: #E0E0E0
    --color-grey400: #F5F5F5


}


`