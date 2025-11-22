import {
    ProjectInformation,
    StyledImg, StyledLinkBox,
    StyledProjectDescription,
    StyledProjectTitle,
    StyledProjectWrapper,
} from "./StyledProjects.tsx";
import {StyledLink} from "../../../components/styledLink/StyledLink.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {ListGenerator} from "../../../components/ListGenerator.tsx";

type ProjectCardPropsType = {
    image: string;
    title: string;
    description: string;
    techStack: string[];
}

const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectWrapper>
            <StyledImg src={props.image} alt={props.title}/>

            <ProjectInformation>
                <StyledProjectTitle>{props.title}</StyledProjectTitle>
                <StyledProjectDescription>{props.description}</StyledProjectDescription>
                <ListGenerator itemArr={props.techStack}/>
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
            </ProjectInformation>
        </StyledProjectWrapper>
    );
};

export default ProjectCard;