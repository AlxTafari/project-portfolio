import {
    StyledImg, StyledLinkBox,
    StyledProjectDescription,
    StyledProjectTitle,
    StyledProjectWrapper,
    StyledTechStack
} from "./StyledProjects.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {StyledLink} from "../../../components/styledLink/StyledLink.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

type ProjectCardPropsType = {
    image: string;
    title: string;
    description: string;
    techStack: string;
}

const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectWrapper>
            <StyledImg src={props.image} alt={props.title}/>
            <FlexWrapper direction={"column"} align={"flex-start"}>
                <StyledProjectTitle>{props.title}</StyledProjectTitle>
                <StyledProjectDescription>{props.description}</StyledProjectDescription>
                <StyledTechStack><span>Tech Stack: </span>{props.techStack}</StyledTechStack>

                <StyledLinkBox>
                    <StyledLink href={"#"}>
                        <Icon iconId={"chain"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                        Live Preview
                    </StyledLink>

                    <StyledLink href={"#"}>
                        <Icon iconId={"git"} width={"20"} height={"20"} viewBox={"0 0 30 30"}/>
                        View Code
                    </StyledLink>
                </StyledLinkBox>
            </FlexWrapper>
        </StyledProjectWrapper>
    );
};

export default ProjectCard;