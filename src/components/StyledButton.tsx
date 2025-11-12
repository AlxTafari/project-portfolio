import styled from "styled-components";

export const StyledBtn = styled.button`
    width: auto;
    height: auto;
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    font-weight: normal;
    display: flex;
    align-items: center; // вертикаль 
    justify-content: center; // горизонталь
    gap: 5px;
    margin-bottom: 50px;

`
export const StyledLink = styled.a`
    
    text-decoration: underline;
    
    svg {
        fill: currentColor; /* ← ключевой момент! */
        transition: fill 0.5s ease;
    }


    &:hover {

        color: #E70FAA;
        transition: 0.5s;
    }
    
    
`