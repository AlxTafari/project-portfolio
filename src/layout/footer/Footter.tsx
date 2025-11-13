import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {SocialIcons} from "../../components/socialBar/SocialIcons.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/container/Container.ts";
import {StyledLink} from "../../components/StyledButton.tsx";

export const Footter = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between" style={{marginBottom: "20px"}}>

                    <Logo/>

                    <FlexWrapper gap={"2rem"}>
                        <StyledLink>+91 12345 09876</StyledLink>
                        <StyledLink>info@example.com</StyledLink>
                        <SocialIcons/>

                    </FlexWrapper>
                </FlexWrapper>


                <FlexWrapper justify="space-between">
                    <Menu/>
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