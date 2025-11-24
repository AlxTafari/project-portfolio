import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyled = createGlobalStyle`
    *,
    *:before,
    *:after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        min-width: 360px;

    }
    
    section {
        padding: 100px 0;

        @media ${theme.media.mobile} {
            padding: 70px 0;
        }
    }
    
    p {
        color: ${theme.colors.secondaryFont};
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background: none;
        border: none;
    }
    
    section, header, footer {
        background: ${theme.colors.primaryBg};
    }
    
`