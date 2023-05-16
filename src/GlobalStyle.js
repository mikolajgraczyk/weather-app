import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Hind Madurai', sans-serif;
        background-color: white;
        background-repeat: no-repeat;
        background-size: cover;
        overflow-y: hidden;
    }
`;
