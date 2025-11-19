import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Skill, skillsBox} from "./Skill.tsx";
import {Container} from "../../../components/container/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                    <SectionTitle
                        align={"center"}
                        title={"My Tech Stack"}
                        description={"Technologies I’ve been working with recently"}
                    />
                        <Skill skillItem={skillsBox}/>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;

`


