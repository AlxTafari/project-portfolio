import styled from "styled-components";
import {GridWrapper} from "../../../components/gridWrapper/GridWrapper.tsx";
import {Container} from "../../../components/container/Container.ts";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {projectsHub} from "./projectHub.ts";
import ProjectCard from "./ProjectCard.tsx";

export const Projects = () => {
    return (
        <ProjectsTestStyled>
            <Container>
                <SectionTitle
                    align={"center"}
                    title={"Projects"}
                    description={"Things I’ve built so far"}
                />
                <GridWrapper columns={3} gap={"2rem"} rowGap={"3rem"}>
                    {Object.keys(projectsHub).map((projectKey) => {
                        const project = projectsHub[projectKey]
                        return (
                            <ProjectCard
                                image={project.image}
                                title={project.name}
                                description={project.description}
                                techStack={project.techStack}
                            />
                        )
                    })}
                </GridWrapper>
            </Container>
        </ProjectsTestStyled>
    )
};

const ProjectsTestStyled = styled.section`
    display: flex;
    padding: 0 0 177px 0;
`
