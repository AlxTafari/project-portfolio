import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    alignContent?: string;
    wrap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    height: 100%;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "stretch"};
    align-content: ${props => props.alignContent || "center"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    
`

