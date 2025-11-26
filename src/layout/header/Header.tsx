import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialIcons} from "../../components/socialBar/SocialIcons.tsx";
import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {MobileMenu} from "../../components/mobileMenu/MobileMenu.tsx";
import {theme} from "../../styles/Theme.ts";

export const items= [
    {
        title:"Home",
        link:"home",
    },
    {
        title:"About",
        link:"about",
    },
    {
        title:"Tech Stack",
        link:"techStack",
    },
    {
        title:"Projects",
        link:"projects",
    },
    {
        title:"Contact",
        link:"contact",
    },
    ]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo className={"headerLogo"}/>
                    <FlexWrapper justify="space-between" align={"center"} gap={"30px"}>
                        <MobileMenu menuItem={items} />
                        <Menu menuItem={items}/>
                        <SocialIcons className={"headerSocialIcons"}/>
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

    @media ${theme.media.tabletHeader} {
        .headerSocialIcons {
            display: none;
        }
    }
   
`


