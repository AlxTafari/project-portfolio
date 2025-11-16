import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

export const GradientText = styled.span`
    background: ${Theme.DarkColors.Gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;