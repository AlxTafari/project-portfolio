import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {SocialIcons} from "../../components/socialBar/SocialIcons.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/container/Container.ts";
import {StyledLink} from "../../components/styledLink/StyledLink.tsx";
import {items} from "../header/Header.tsx";
import {GradientText} from "../../components/gradientText/GradientText.tsx";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterBox>


                    <Logo/>

                    <FlexWrapper>
                        <StyledNum>
                            <StyledLink>+91 12345 09876</StyledLink>
                            <StyledLink>info@example.com</StyledLink>
                            <SocialIcons/>
                        </StyledNum>
                    </FlexWrapper>

                </FooterBox>

                <FlexWrapper justify="space-between">
                    <Menu menuItem={items}/>
                    <Copyright>Designed and built by <GradientText>AlxTafari</GradientText></Copyright>

                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 60px 0;
`

const Copyright = styled.small`
    opacity: 0.8;
`

const StyledNum = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
`
const FooterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid ${theme.darkColors.borderColor};
    padding-bottom: 40px;
    margin-bottom: 40px;
    
`


// const Divider = styled.div`
//     border: 2px solid ${theme.darkColors.borderColor};
//     margin: 40px 0;
// `