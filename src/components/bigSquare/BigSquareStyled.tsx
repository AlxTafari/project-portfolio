import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const BigSquareStyled = styled.img`
    position: absolute;
    z-index: 1;
    left: 65%;
    pointer-events: none;
    
    @media ${theme.media.mobile} {
        display: none;
    }
`