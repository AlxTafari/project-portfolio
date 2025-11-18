import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const StyledProjectWrapper = styled.div`
    width: 100%;
    min-height: 540px;
    border-radius: 20px;
    background-color: ${theme.darkColors.secondaryBg};
    box-shadow: ${theme.darkColors.shadow};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Poppins', sans-serif;
    padding: 0 0 25px 0;
    
`

export const StyledProjectTitle = styled.h3`
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 26px;
    text-align: center;
    padding: 28px 28px 18px 28px;
`
export const StyledProjectDescription = styled.p`
    font-weight: 200;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    padding: 0 28px 12px 28px

`
export const StyledTechStack = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    padding: 0 28px 22px 28px;


    span {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        
    }
;
`
export const StyledImg = styled.img`
    width: 100%;
    max-height: 265px;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
export const StyledLinkBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    float: left;
    gap: 48px;

    a {
        text-decoration: underline;
    }
`
