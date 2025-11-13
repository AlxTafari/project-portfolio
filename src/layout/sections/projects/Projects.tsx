import {Project} from "../../../components/projectWrapper/ProjectWrapper/Project.tsx";
import styled from "styled-components";
import {InformationBlock} from "../../../components/informationBlock/InformationBlock.tsx";
import {Container} from "../../../components/container/Container.ts";
import {GridWrapper} from "../../../components/gridWrapper/GridWrapper.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                    <InformationBlock
                        textAlign={"center"} marginBottom={"4rem"}
                        title={"Projects"}
                        description={"Things I’ve built so far"}
                    />
                    <GridWrapper columns={3} gap={"2rem"} rowGap={"3rem"}>
                        <Project proj={"proj1"}/>
                        <Project proj={"proj2"}/>
                        <Project proj={"proj3"}/>
                        <Project proj={"proj4"}/>
                        <Project proj={"proj5"}/>
                        <Project proj={"proj6"}/>
                    </GridWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    min-height: 100vh;
    display: flex;
    padding: 0px 0px 177px 0px;
`

