import styled from "styled-components";
import {font} from "../../styles/Common.ts";
import {theme} from "../../styles/Theme.ts";


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
    margin: 48px 0;
    ${font({Fmax: 48, Fmin: 28, weight: 600, color: theme.colors.font})};
`

const StyledDescription = styled.p`
    margin: 0 0 100px 0;
    ${font({Fmax: 32, Fmin: 16, weight: 300, color: theme.colors.secondaryFont} )};
    
    @media ${theme.media.mobile} {
        margin: 0 0 60px 0;
    }
`