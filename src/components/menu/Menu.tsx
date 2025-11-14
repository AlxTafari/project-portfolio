import styled from "styled-components";
import { StyledLink} from "../StyledButton.tsx";


export const Menu = (props: { menuItem: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItem.map((item, index) => {
                        return  <li key={index}>
                            <StyledLink as={StyledLink} href="#">{item}</StyledLink>
                                </li>
                    }
                )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

    a {
        text-decoration: none;
    }

    ul {
        display: flex;
        gap: 64px;
    }
`
