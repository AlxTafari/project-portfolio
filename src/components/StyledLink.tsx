import styled from "styled-components";

export const StyledLink = styled.a`
    width: auto;
    height: auto;
    font-size: 20px;
    font-weight: normal;
    display: flex;
    align-items: center; // вертикаль 
    justify-content: center; // горизонталь
    gap: 5px;
    color: inherit;
    text-decoration: none;
    
    svg {
        fill: currentColor; /* ← ключевой момент! */
        transition: fill 0.5s ease;
    }

    cursor: pointer;


    &:hover {

        color: #E70FAA;
        transition: 0.5s;
    }
    
    
`