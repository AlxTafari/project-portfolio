import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    rowGap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "wrap"};
    gap: ${props => props.gap || "0px"};
    row-gap: ${props => props.rowGap|| "0px"};
    
`

