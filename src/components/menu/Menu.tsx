import styled from "styled-components";
import {StyledBtn, StyledLink} from "../StyledButton.tsx";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <StyledBtn as={StyledLink} href="#">Home</StyledBtn>
                </li>
                <li>
                    <StyledBtn as={StyledLink} href="">About</StyledBtn>
                </li>
                <li>
                    <StyledBtn as={StyledLink} href="">Tech Stack </StyledBtn>
                </li>
                <li>
                    <StyledBtn as={StyledLink} href="">Projects</StyledBtn>
                </li>
                <li>
                    <StyledBtn as={StyledLink} href="">Contact</StyledBtn>
                </li>
            </ul>
            </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    
    a {
        text-decoration: none;
    }
    ul {
        display: flex;
        gap: 64px;
    }
`
