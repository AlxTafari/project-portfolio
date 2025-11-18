import styled from "styled-components";

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