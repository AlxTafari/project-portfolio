import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {StyledLink} from "../StyledLink.tsx";

export const SocialIcons = () => {
    return (
        <StyledSocialBar>
            <StyledLink href="">
                <Icon iconId={"telegram"} width={"40"} height={"40"} viewBox={"0 0 29 29"} />
            </StyledLink>
            <StyledLink href="">
                <Icon iconId={"linkedin"} width={"40"} height={"40"} viewBox={"0 0 40 40"} />
            </StyledLink>
            <StyledLink href="">
                <Icon iconId={"git"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
            </StyledLink>
        </StyledSocialBar>
    );
};

const StyledSocialBar = styled.nav`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 2rem;
    
`