import styled from "styled-components";
import { StyledLink} from "../styledLink/StyledLink.tsx";
import {theme} from "../../styles/Theme.ts";


export const Menu = (props: { menuItem: Array<{ title: string; link: string }> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItem.map((item, index) => {
                        return  <li key={index}>
                            <StyledLink href={`#${item.link}`}>{item.title}</StyledLink>
                                </li>
                    }
                )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    font-size: 20px;
    //margin-right: 50px;
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
