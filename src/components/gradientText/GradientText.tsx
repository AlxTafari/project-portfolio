import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const GradientText = styled.span`
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;