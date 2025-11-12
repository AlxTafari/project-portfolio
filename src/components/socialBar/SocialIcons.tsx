import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const SocialIcons = () => {
    return (
        <StyledSocialBar>
            <a href="">
                <Icon iconId={"telegram"} width={"40"} height={"40"} viewBox={"0 0 29 29"} />
            </a>
            <a href="">
                <Icon iconId={"linkedin"} width={"40"} height={"40"} viewBox={"0 0 40 40"} />
            </a>
            <a href="">
                <Icon iconId={"git"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
            </a>
        </StyledSocialBar>
    );
};

const StyledSocialBar = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 40px;
    gap: 10px;
    
`