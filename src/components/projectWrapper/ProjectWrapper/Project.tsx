import styled from "styled-components";

import {ProjectPreview} from "../../../assets/img/skills/ImportImages.tsx";
import {InformationBlock} from "../../informationBlock/InformationBlock.tsx";
import {Icon} from "../../icon/Icon.tsx";
import {StyledLink} from "../../StyledLink.tsx";
import {Theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../flexWrapper/FlexWrapper.tsx";

type ProjectPropsType = {
    proj: keyof typeof ProjectPreview;
}

export const Project = (props: ProjectPropsType) => {
    return (

        <StyledProjectWrapper>
            <StyledImg src={ProjectPreview[props.proj]} alt={props.proj}/>
            <FlexWrapper justify={"space-around"} direction={"column"}>
                <InformationBlock
                    title={"Project Tile goes here"}
                    textAlign="left"
                    description="This is sample project description random things are here in description This is
                        sample project lorem ipsum generator for dummy content"
                />

                <StyledLinkBox>
                    <StyledLink href={"#"}>
                        <Icon iconId={"code"} width={"20"} height={"20"}/>
                        Live Preview
                    </StyledLink>

                    <StyledLink href={"#"}>
                        <Icon iconId={"code"} width={"20"} height={"20"}/>
                        View Code
                    </StyledLink>
                </StyledLinkBox>
            </FlexWrapper>
        </StyledProjectWrapper>
    );
};


export const StyledProjectWrapper = styled.div`
    width: 100%;
    min-height: 540px;
    border-radius: 20px;
    background-color: ${Theme.DarkColors.SecondaryBg};
    box-shadow: ${Theme.DarkColors.Shadow};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Inter', sans-serif;
    padding: 0 0 2rem 0;

    h2 {
        font-size: 26px;
    }

    p {
        font-size: 18px;
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
