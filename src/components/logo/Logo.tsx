import { Icon } from "../icon/Icon.tsx";
import styled from "styled-components";
import {StyledLink} from "../StyledButton.tsx";
import {Theme} from "../../styles/Theme.ts";


export const Logo = () => {
    return (
        <StyledLink href="">
            <Icon iconId={"code"} fill={"Theme.DarkColors.Gradient"}/>
        </StyledLink>
    );
};


