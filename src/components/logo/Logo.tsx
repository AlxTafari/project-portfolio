import { Icon } from "../icon/Icon.tsx";
import styled from "styled-components";
import {StyledLink} from "../StyledButton.tsx";

export const Logo = () => {
    return (
        <StyledLink href="">
            <Icon iconId={"code"}/>
        </StyledLink>
    );
};


