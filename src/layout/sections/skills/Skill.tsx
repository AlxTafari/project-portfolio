import {Photo} from "../../../assets/img/skills/ImportImages.tsx";
import styled from "styled-components";

type SkillPropsType = {
    photo: keyof typeof Photo;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>

            <StyledImg src={Photo[props.photo]} alt={props.photo}/>

        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    margin-bottom: 3rem;
    width: 16%;
`
const StyledImg = styled.img`
    width: auto; /* естественная ширина */
    height: auto; /* естественная высота */
    max-width: 100%; /* не превышать контейнер */
    display: block; /* убрать пробелы снизу, если нужно */
`;
