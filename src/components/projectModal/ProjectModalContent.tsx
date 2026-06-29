import { S } from "./ProjectModal_Styles.ts";

type Props = {
    name: string;
    description: string;
};

export const ProjectModalContent = ({ name, description }: Props) => (
    <S.Content>
        <S.ContentTitle>{name}</S.ContentTitle>
        <S.ContentDescription>{description}</S.ContentDescription>
        <S.ContentPlaceholder>
            — здесь будет расширенный контент: галерея, ссылки, демо —
        </S.ContentPlaceholder>
    </S.Content>
);
