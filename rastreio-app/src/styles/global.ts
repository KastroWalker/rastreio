import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: #EEEEEE;
    }

    h1 {
        display: flex;
        justify-content: center;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 10px;
    }
`