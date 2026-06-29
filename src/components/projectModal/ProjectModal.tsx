import { useEffect } from "react";
import { ProjectData } from "../../layout/sections/projects/projectsData.ts";
import { S } from "./ProjectModal_Styles.ts";
import { ProjectModalHeader } from "./ProjectModalHeader.tsx";
import { ProjectModalSidebar } from "./ProjectModalSidebar.tsx";
import { ProjectModalContent } from "./ProjectModalContent.tsx";

type Props = {
    projects: ProjectData[];
    activeIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
};

export const ProjectModal = ({ projects, activeIndex, onClose, onPrev, onNext }: Props) => {
    const project = projects[activeIndex];

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose, onPrev, onNext]);

    // блокируем скролл страницы пока открыта модалка
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <S.Overlay onClick={onClose}>
            <S.ArrowButton $side="left" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
                ‹
            </S.ArrowButton>

            <S.Window onClick={(e) => e.stopPropagation()}>
                <S.CloseButton onClick={onClose}>✕</S.CloseButton>
                <ProjectModalHeader image={project.image} title={project.name} />
                <S.Body>
                    <ProjectModalContent name={project.name} description={project.description} />
                    <ProjectModalSidebar techStack={project.techStack} />
                </S.Body>
            </S.Window>

            <S.ArrowButton $side="right" onClick={(e) => { e.stopPropagation(); onNext(); }}>
                ›
            </S.ArrowButton>
        </S.Overlay>
    );
};
