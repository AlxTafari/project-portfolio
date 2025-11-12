import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialIcons} from "../../components/socialBar/SocialIcons.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <FlexWrapper justify="flex-end" align={"center"}>
                        <Menu/>
                        <SocialIcons/>
                    </FlexWrapper>

                </FlexWrapper>
            </Container>

        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    min-height: 59px;
    background-color: #57d976;
    display: flex;

`


