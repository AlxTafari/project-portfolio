import styled from "styled-components";
import proj1 from "../assets/img/prj1.webp"
import proj2 from "../assets/img/proj2.jpg"
import proj3 from "../assets/img/prj3.webp"
import proj4 from "../assets/img/prj4.webp"
import proj5 from "../assets/img/prj5.webp"
import proj6 from "../assets/img/prj6.webp"
import {StyledLink} from "./StyledLink.tsx";
import {Icon} from "./icon/Icon.tsx";
import {StyledImg, StyledLinkBox, StyledProjectWrapper} from "./projectWrapper/ProjectWrapper/Project.tsx";
import {FlexWrapper} from "./flexWrapper/FlexWrapper.tsx";
import {GridWrapper} from "./gridWrapper/GridWrapper.tsx";
import {Container} from "./container/Container.ts";
import {InformationBlock} from "./informationBlock/InformationBlock.tsx";

const projectsHub = {
    project1: {
        name: "Project 1",
        description: "Description 1",
        image: proj1,
        techStack: "HTML, CSS, React, TypeScript",
    },
    project2: {
        name: "Project 2",
        description: "Description 2",
        image: proj2,
        techStack: "HTML, CSS, React, TypeScript",
    },
    project3: {
        name: "Project 3",
        description: "Description 3",
        image: proj3,
        techStack: "HTML, CSS, React, TypeScript",
    },
    project4: {
        name: "Project 4",
        description: "Description 4",
        image: proj4,
        techStack: "HTML, CSS, React, TypeScript",
    },
    project5: {
        name: "Project 5",
        description: "Description 5",
        image: proj5,
        techStack: "HTML, CSS, React, TypeScript",
    },
    project6: {
        name: "Project 6",
        description: "Description 6",
        image: proj6,
        techStack: "HTML, CSS, React, TypeScript",
    },
};

export const ProjectsTest = () => {
    return (
        <ProjectsTestStyled>
            <Container>
                <InformationBlock
                    textAlign={"center"} marginBottom={"4rem"}
                    title={"Projects"}
                    description={"Things I’ve built so far"}
                />
                <GridWrapper columns={3} gap={"2rem"} rowGap={"3rem"}>
                    {Object.keys(projectsHub).map((projectKey) => {
                        const project = projectsHub[projectKey]
                        return (
                            <StyledProjectWrapper key={projectKey}>
                                <StyledImg src={project.image} alt={project.name}/>
                                <FlexWrapper justify={"space-around"} direction={"column"}>
                                    <h1>{project.name}</h1>
                                    <p>{project.description}</p>
                                    <small><span>Tech Stack: </span>{project.techStack}</small>

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
                        )
                    })}
                </GridWrapper>
            </Container>
        </ProjectsTestStyled>
    )
};

const ProjectsTestStyled = styled.section`
    min-height: 100vh;
    display: flex;
    padding: 0 0 177px 0;
`