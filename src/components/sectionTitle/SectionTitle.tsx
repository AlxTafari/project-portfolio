import styled from "styled-components";


type SectionTitlePropsType = {
    title?: string;
    description?: string;
    align?: string;

};

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle align={props.align}>
            <StyledTitle>{props.title}</StyledTitle>
            {props.description && (
                <StyledDescription>{props.description}</StyledDescription>
            )}
        </StyledSectionTitle>
    )
};

const StyledSectionTitle = styled.div<SectionTitlePropsType>`
    text-align: ${props => props.align || "center"};
`

const StyledTitle = styled.h2`
    padding: 0 0 48px 0;
    font-size: 48px;
`

const StyledDescription = styled.p`
    padding: 0 0 110px 0;
    font-size: 28px;
`