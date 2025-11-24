import styled from "styled-components";
import {GridWrapper} from "../../../components/gridWrapper/GridWrapper.tsx";
import {Container} from "../../../components/container/Container.ts";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {projectsData} from "./projectsData.ts";
import ProjectCard from "./ProjectCard.tsx";

export const Projects = () => {
    return (
        <ProjectsTestStyled id="projects">
            <Container>
                <SectionTitle
                    align={"center"}
                    title={"Projects"}
                    description={"Things I’ve built so far"}
                />
                <GridWrapper minColumnWidth={"320px"} gap={"2rem"} rowGap={"3rem"} place={"center"}>
                    {Object.keys(projectsData).map((projectKey) => {
                        const project = projectsData[projectKey as keyof typeof projectsData]
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
    position: relative;
`
