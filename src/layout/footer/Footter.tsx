import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {SocialIcons} from "../../components/socialBar/SocialIcons.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/container/Container.ts";
import {StyledLink} from "../../components/styledLink/StyledLink.tsx";
import {items} from "../header/Header.tsx";

export const Footter = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between" style={{marginBottom: "20px"}}>

                    <Logo/>

                    <FlexWrapper>
                        <StyledNum>
                            <StyledLink>+91 12345 09876</StyledLink>
                            <StyledLink>info@example.com</StyledLink>
                        </StyledNum>
                        <SocialIcons/>
                    </FlexWrapper>
                </FlexWrapper>


                <FlexWrapper justify="space-between">
                    <Menu menuItem={items}/>
                    <Copyright>Designed and built by AlxTafari</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 20vh;
`

const Copyright = styled.small`
`

const StyledNum = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
`