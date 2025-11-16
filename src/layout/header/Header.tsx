import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialIcons} from "../../components/socialBar/SocialIcons.tsx";
import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";

export const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <FlexWrapper justify="flex-end" align={"center"}>
                        <Menu menuItem={items}/>
                        <SocialIcons/>
                    </FlexWrapper>

                </FlexWrapper>
            </Container>

        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background: rgba(32, 32, 33, 0.5);
    padding: 20px 0;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`


