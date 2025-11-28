import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {DeskMenu} from "../header/DeskMenu/DeskMenu.tsx";
import {Container} from "../../components/container/Container.ts";
import {items} from "../header/Header.tsx";
import {GradientText} from "../../components/gradientText/GradientText.tsx";
import {theme} from "../../styles/Theme.ts";
import {ContactsBlock} from "../../components/contactsBlock/ContactsBlock.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterBox $border $padding $margin>

                    <Logo className={"FooterLogo"}/>

                    <ContactsBlock/>

                </FooterBox>

                <FooterBox>

                    <DeskMenu menuItem={items}/>

                    <Copyright>Designed and built by <GradientText>AlxTafari</GradientText></Copyright>

                </FooterBox>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 60px 0;
    position: relative;
    
`

const Copyright = styled.small`
    opacity: 0.8;

    @media ${theme.media.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
`
type FooterBoxPropsType = {
    $border?: boolean;
    $padding?: boolean;
    $margin?: boolean;
}

const FooterBox = styled.div<FooterBoxPropsType>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: ${({ $border }) =>
            $border ? `2px solid ${theme.colors.borderColor}` : "none"};
    
    padding-bottom: ${({ $padding }) => $padding ? '40px' : "0"};
    margin-bottom: ${({ $margin }) => $margin ? '40px' : '0'};
    gap: 30px;
    
    @media ${theme.media.tablet} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .FooterLogo {
            display: none;
        };
    }

`