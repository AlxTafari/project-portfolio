import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const StyledLink = styled.a`
    width: auto;
    height: auto;
    font-size: 20px;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 6px;// вертикаль 
    justify-content: center; // горизонталь
    color: inherit;
    text-decoration: none;
    transition: color 0.5s ease;
    cursor: pointer;
    
    svg {
        fill: currentColor; /* ← ключевой момент! */
        transition: fill 0.5s ease;
    }
    
    &:hover {
        color: ${theme.darkColors.accent};
    }
`