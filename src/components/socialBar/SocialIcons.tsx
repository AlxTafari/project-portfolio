import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {StyledLink} from "../styledLink/StyledLink.tsx";
import {theme} from "../../styles/Theme.ts";

type SocialIconsPropsType = React.HTMLAttributes<HTMLAnchorElement>;

export const SocialIcons = ({className} : SocialIconsPropsType) => {
    return (
        <StyledSocialBar className={className}>
            <StyledLink href="https://t.me/AlxTafari">
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
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
    @media ${theme.media.mobile} {
        justify-content: center;
        gap: 16px;
    }
   `