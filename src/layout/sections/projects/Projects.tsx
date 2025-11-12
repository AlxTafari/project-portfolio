import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "../../../components/projectWrapper/ProjectWrapper/Project.tsx";
import styled from "styled-components";
import {InformationBlock} from "../../../components/informationBlock/InformationBlock.tsx";

export const Projects = () => {
    return (

        <StyledProjects>
            <InformationBlock
                textAlign={"center"} marginBottom={"4rem"}
                title={"Projects"}
                description={"Things I’ve built so far"}
            />
            <FlexWrapper justify={"space-between"} rowGap={"62px"} align={"space-between"} wrap={"wrap"}
                         direction={"row"}>
                <Project proj={"proj1"}/>
                <Project proj={"proj2"}/>
                <Project proj={"proj3"}/>
                <Project proj={"proj4"}/>
                <Project proj={"proj5"}/>
                <Project proj={"proj6"}/>
            </FlexWrapper>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    padding: 177px;
    height: 100%;
    background: #f8a7d3;
`