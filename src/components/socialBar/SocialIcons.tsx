import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {StyledLink} from "../styledLink/StyledLink.tsx";

export const SocialIcons = () => {
    return (
        <StyledSocialBar>
            <StyledLink href="">
                <Icon iconId={"telegram"} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
            </StyledLink>
            <StyledLink href="">
                <Icon iconId={"linkedin"} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
            </StyledLink>
            <StyledLink href="">
                <Icon iconId={"git"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            </StyledLink>
        </StyledSocialBar>
    );
};

const StyledSocialBar = styled.nav`
    display: flex;
    align-items: center;
    gap: 16px;
   `