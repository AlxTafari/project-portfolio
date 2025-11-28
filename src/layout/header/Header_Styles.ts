import {theme} from "../../styles/Theme.ts";
import styled, {css} from "styled-components";

const Header = styled.header`
    background: rgba(32, 32, 33, 0.5);
    padding: 20px 0;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    // @media ${theme.media.tabletHeader} {
    //     .headerSocialIcons {
    //         display: none;
    //     }
    // }
   
`
// Desktop DeskMenu

const DeskMenu = styled.nav`
    font-size: 20px;
    min-width: 567px;
    
    a {
        text-decoration: none;
    }

    ul {
        display: flex;
        justify-content: space-between;
    }
    
    @media ${theme.media.tabletHeader} {
        display: none;
    }
`

// MobileMenu

const MobileMenu = styled.nav`
    font-size: 36px;
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

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
            width: 36px;
            height: 3px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                width: 48px;
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 48px;
            height: 3px;
            background-color: ${theme.colors.font};
            position: absolute;
            left: 0;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);


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




export const S = {
    Header,
    DeskMenu,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,


 }

