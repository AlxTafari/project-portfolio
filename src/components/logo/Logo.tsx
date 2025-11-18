import { Icon } from "../icon/Icon.tsx";
import styled from "styled-components";
import {StyledLink} from "../styledLink/StyledLink.tsx";
import {theme} from "../../styles/Theme.ts";


export const Logo = () => {
    return (
        <StyledLink href="">
            <Icon iconId={"code"} fill={"Theme.DarkColors.Gradient"}/>
        </StyledLink>
    );
};


