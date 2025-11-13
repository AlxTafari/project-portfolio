import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    alignItems?: string;
    wrap?: string;
}
export const FlexWrapper1 = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.alignItems};
    flex-wrap: ${props => props.wrap};
`