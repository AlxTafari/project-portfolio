import styled from "styled-components";

import {ProjectPreview} from "../../../assets/img/skills/ImportImages.tsx";
import {InformationBlock} from "../../informationBlock/InformationBlock.tsx";
import {Icon} from "../../icon/Icon.tsx";
import {StyledBtn, StyledLink} from "../../StyledButton.tsx";

type ProjectPropsType = {
    proj: keyof typeof ProjectPreview;
}

export const Project = (props: ProjectPropsType) => {
    return (

        <StyledProjectWrapper>
            <StyledImg src={ProjectPreview[props.proj]} alt={props.proj}/>

            <InformationBlock
                title={"Project Tile goes here"}
                textAlign="left"
                description="This is sample project description random things are here in description This is
                        sample project lorem ipsum generator for dummy content"
            />

            <StyledBox>
                <StyledBtn as={StyledLink} href={"#"}>
                    <Icon iconId={"code"} width={"20"} height={"20"}/>
                    Live Preview
                </StyledBtn>

                <StyledBtn as={StyledLink} href={"#"}>
                    <Icon iconId={"code"} width={"20"} height={"20"}/>
                    View Code
                </StyledBtn>
            </StyledBox>
        </StyledProjectWrapper>
    );
};


const StyledProjectWrapper = styled.div`
    width: 32%;
    min-height: 520px;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 2px 2px 100px 0px rgba(87, 244, 13, 0.97);;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Inter', sans-serif;
`
const StyledImg = styled.img`
    width: 100%;
    max-height: 265px;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    float: left;
    gap: 48px;
`
