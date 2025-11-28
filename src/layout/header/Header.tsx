import * as React from "react";
import {Logo} from "../../components/logo/Logo.tsx";
import {DeskMenu} from "./DeskMenu/DeskMenu.tsx";
import {SocialIcons} from "../../components/socialBar/SocialIcons.tsx";
import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {S} from "./Header_Styles.ts";

export const items = [
    {
        title: "Home",
        link: "home",
    },
    {
        title: "About",
        link: "about",
    },
    {
        title: "Tech Stack",
        link: "techstack",
    },
    {
        title: "Projects",
        link: "projects",
    },
    {
        title: "Contact",
        link: "contact",
    },
]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const breakpoint = 860;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo className={"headerLogo"}/>
                    <FlexWrapper justify="space-between" align={"center"} gap={"30px"}>

                        {width < breakpoint ? <MobileMenu menuItem={items}/>
                            : (
                                <>
                                    <DeskMenu menuItem={items}/>
                                    <SocialIcons className={"headerSocialIcons"}/>
                                </>
                            )}


                    </FlexWrapper>

                </FlexWrapper>
            </Container>

        </S.Header>

    );
};



