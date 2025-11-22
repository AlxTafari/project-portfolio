import styled, {css} from "styled-components";
import {StyledLink} from "../styledLink/StyledLink.tsx";
import {theme} from "../../styles/Theme.ts";


export const MobileMenu = (props: { menuItem: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItem.map((item, index) => {
                            return <li key={index}>
                                <StyledLink href="#">{item}</StyledLink>
                            </li>
                        }
                    )}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    font-size: 48px;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span {
        display: block;
        width: 48px;
        height: 3px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 30px;
        bottom: 50px;
        
        
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 48px;
            height: 3px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);

            `}
        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 3px;
            background-color: ${theme.colors.font};
            position: absolute;
            left: 12px;
            transform: translateY(10px) ;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 48px;

            `}
        }
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99999;
    display: none;
    background-color: rgba(30, 30, 30, 0.9);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;
    }

    a {
        text-decoration: none;
    }
`

