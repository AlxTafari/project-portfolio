import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../../components/container/Container.ts";
import {GridWrapper} from "../../../components/gridWrapper/GridWrapper.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper align={"center"} justify={"center"}>
                    <SectionTitle
                        align={"center"} marginBottom={"4rem"}
                        title={"My Tech Stack"}
                        description={"Technologies I’ve been working with recently"}
                    />

                    <GridWrapper columns={6} gap={"2rem"}>
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
                    </GridWrapper>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;

`


