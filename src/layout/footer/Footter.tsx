import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {SocialIcons} from "../../components/socialBar/SocialIcons.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Footter = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify="space-between" style={{marginBottom: "20px"}}>
                <Logo />

                <FlexWrapper gap={"2rem"}>
                    <span>+91 12345 09876</span>
                    <span>info@example.com</span>
                    <SocialIcons/>

                </FlexWrapper>
            </FlexWrapper>


            <FlexWrapper justify="space-between" >
                <Menu/>
                <Copyright>Designed and built by AlxTafari</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 20vh;
    background: #f1c4a7;
`

const Copyright = styled.small`
`