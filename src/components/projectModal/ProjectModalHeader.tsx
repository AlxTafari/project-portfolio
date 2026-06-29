import { S } from "./ProjectModal_Styles.ts";

type Props = {
    image: string;
    title: string;
};

export const ProjectModalHeader = ({ image, title }: Props) => (
    <S.Banner>
        <img src={image} alt={title} />
    </S.Banner>
);
