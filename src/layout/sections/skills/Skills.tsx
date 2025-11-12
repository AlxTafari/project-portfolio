import styled from "styled-components";
import {InformationBlock} from "../../../components/informationBlock/InformationBlock.tsx";
import {Skill} from "./Skill.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper justify={"center"} align={"center"}>
            <InformationBlock
                textAlign={"center"} marginBottom={"4rem"}
                title={"My Tech Stack"}
                description={"Technologies I’ve been working with recently"}/>
            </FlexWrapper>
                <FlexWrapper wrap={"wrap"}>
                    <Skill photo={"html"}/>
                    <Skill photo={"typecss"}/>
                    <Skill photo={"js"}/>
                    <Skill photo={"react"}/>
                    <Skill photo={"smthtech1"}/>
                    <Skill photo={"bootstrap"}/>
                    <Skill photo={"tailwind"}/>
                    <Skill photo={"sass"}/>
                    <Skill photo={"git"}/>
                    <Skill photo={"cib_greensock"}/>
                    <Skill photo={"vscode"}/>
                    <Skill photo={"github"}/>

                </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding: 177px;
    height: 100vh;
    background: #05cccc;
   `


