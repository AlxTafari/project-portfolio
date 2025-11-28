import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {SkillGen, skillsBox} from "./SkillGen.tsx";
import {Container} from "../../../components/container/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills id="techstack">
            <Container>
                    <SectionTitle
                        align={"center"}
                        title={"My Tech Stack"}
                        description={"Technologies I’ve been working with recently"}
                    />
                        <SkillGen skillItem={skillsBox}/>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    position: relative;
`


