import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: transparent;
    }

    body {
        background-color: ${props => props.theme['gray-600']};
        color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`