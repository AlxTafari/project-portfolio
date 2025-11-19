import {
    ProjectInformation,
    StyledImg, StyledLinkBox,
    StyledProjectDescription,
    StyledProjectTitle,
    StyledProjectWrapper,
    StyledTechStack
} from "./StyledProjects.tsx";
import {StyledLink} from "../../../components/styledLink/StyledLink.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {List} from "../../../components/List.tsx";

type ProjectCardPropsType = {
    image: string;
    title: string;
    description: string;
    techStack: string[];
    item?: string;
    itemArr?: string;
}

const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectWrapper>
            <StyledImg src={props.image} alt={props.title}/>

            <ProjectInformation>
                <StyledProjectTitle>{props.title}</StyledProjectTitle>
                <StyledProjectDescription>{props.description}</StyledProjectDescription>
                <List itemArr={props.techStack}/>
                {/*<span>Tech Stack: </span>*/}
                {/*{*/}
                {/*    props.techStack.map((item, index) => {*/}
                {/*        return (<li key={index}>*/}
                {/*                {item}*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*)}*/}
                {/*<StyledTechStack><span>Tech Stack: </span>{props.techStack}</StyledTechStack>*/}
                {/*<List item={props.item} itemArr={props.itemArr}/>*/}

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