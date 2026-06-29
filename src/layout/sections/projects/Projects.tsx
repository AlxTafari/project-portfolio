import { useState } from "react";
import styled from "styled-components";
import { GridWrapper } from "../../../components/gridWrapper/GridWrapper.tsx";
import { Container } from "../../../components/container/Container.ts";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.tsx";
import { projectsData } from "./projectsData.ts";
import ProjectCard from "./ProjectCard.tsx";
import { ProjectModal } from "../../../components/projectModal/ProjectModal.tsx";

export const Projects = () => {
    const projects = Object.values(projectsData);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClose = () => setActiveIndex(null);
    const handlePrev = () =>
        setActiveIndex((i) => (i !== null ? (i - 1 + projects.length) % projects.length : null));
    const handleNext = () =>
        setActiveIndex((i) => (i !== null ? (i + 1) % projects.length : null));

    return (
        <ProjectsTestStyled id="projects">
            <Container>
                <SectionTitle
                    align={"center"}
                    title={"Projects"}
                    description={"Things I've built so far"}
                />
                <GridWrapper minColumnWidth={"320px"} gap={"2rem"} rowGap={"3rem"} place={"center"}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.name}
                            image={project.image}
                            title={project.name}
                            description={project.description}
                            techStack={project.techStack}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </GridWrapper>
            </Container>

            {activeIndex !== null && (
                <ProjectModal
                    projects={projects}
                    activeIndex={activeIndex}
                    onClose={handleClose}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            )}
        </ProjectsTestStyled>
    );
};

const ProjectsTestStyled = styled.section`
    display: flex;
    position: relative;
`;
