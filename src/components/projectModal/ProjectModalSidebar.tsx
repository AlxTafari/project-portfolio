import { S } from "./ProjectModal_Styles.ts";

type Props = {
    techStack: string[];
};

export const ProjectModalSidebar = ({ techStack }: Props) => (
    <S.Sidebar>
        <S.SidebarTitle>Tech Stack</S.SidebarTitle>
        <S.TechList>
            {techStack.map((tech) => (
                <S.TechItem key={tech}>{tech}</S.TechItem>
            ))}
        </S.TechList>
    </S.Sidebar>
);
