import styled from "styled-components";
import { StyledLink} from "../styledLink/StyledLink.tsx";
import {theme} from "../../styles/Theme.ts";


export const Menu = (props: { menuItem: Array<{ title: string; link: string }> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItem.map((item, index) => {
                        return  <li key={index}>
                            <StyledLink href={`#${item.title.toLowerCase()}`}>{item.title}</StyledLink>
                                </li>
                    }
                )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    font-size: 20px;
    margin-right: 50px;


    a {
        text-decoration: none;
    }

    ul {
        display: flex;
        gap: 64px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`
