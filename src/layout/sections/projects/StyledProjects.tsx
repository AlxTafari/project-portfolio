import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const StyledProjectWrapper = styled.article`
    width: 100%;
    min-height: 540px;
    border-radius: 20px;
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.secondaryFont};
    box-shadow: ${theme.colors.shadow};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    line-height: 26px;
    font-size: 16px;

    a {
        text-decoration: underline;
        margin: 0 20px;
    }
    
    @media ${theme.media.tablet} {
        max-width: 560px;
    }
`

export const StyledImg = styled.img`
    width: 100%;
    max-height: 265px;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const ProjectInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 25px;

`
export const StyledProjectTitle = styled.h3`
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 28px;
    text-align: center;
    margin-bottom: 18px;
`
export const StyledProjectDescription = styled.p`
    font-weight: 200;
    font-size: 18px;
    margin-bottom: 12px;

`

export const StyledTechStack = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 22px;
    gap: 5px;
    

    li {
        transform: translateY(1px);
    }
    
    li::after {
        content: ",";
    }

    li:last-child::after {
        content: "";
    }

    span {
        font-size: 16px;
        font-weight: 500;
    };
`
export const StyledLinkBox = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    color: ${theme.colors.font};
`