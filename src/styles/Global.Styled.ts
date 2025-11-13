import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.ts";

export const GlobalStyled = createGlobalStyle`
    *,
    *:before,
    *:after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.DarkColors.Font};
    }
    
    // ul {
    //     color: ${Theme.DarkColors.Font};
    // }
    
    p {
        color: ${Theme.DarkColors.SecondryFont};
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
        background: ${Theme.DarkColors.PrimaryBg};
    }
    
`