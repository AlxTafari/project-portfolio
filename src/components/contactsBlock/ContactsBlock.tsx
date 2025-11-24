import styled from "styled-components";
import {StyledLink} from "../styledLink/StyledLink.tsx";
import {SocialIcons} from "../socialBar/SocialIcons.tsx";
import {theme} from "../../styles/Theme.ts";

export const ContactsBlock = () => {
    return (
        <StyledContacts>
            <StyledLink href={"tel:+91 12345 09876"}>+91 12345 09876</StyledLink>
            <StyledLink href={"mailto:kornishin2702@gmail.com?subject=Hello&body=Hi"}>kornishin2702@gmail</StyledLink>
            <SocialIcons/>
        </StyledContacts>
    );
};

export const StyledContacts = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 60px;
    
    @media ${theme.media.mobile} {
        flex-direction: column-reverse;
        gap: 30px
    }
`