import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body{
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    background-color: #333333;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

ul {
list-style: none;
}

a{
    color: inherit;
    text-decoration: none;
}

`;

export default GlobalStyles;
