import styled from "styled-components";
import photo from "../../../assets/img/prj6.webp"
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {GradientText} from "../../../components/gradientText/GradientText.tsx";
import abstract from "../../../assets/img/abstract.svg";
import {theme} from "../../../styles/Theme.ts";
import {fluidSize, font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain id="home">
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"} >
                    <StyledHello>
                        <span>Hi 👋,</span>
                        <span>My name is</span>
                        <GradientText>Alexander</GradientText>
                        <span>I am Web Developer</span>
                    </StyledHello>

                    <PhotoWrapper>
                        <Photo src={photo} alt={"main photo"}/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    
`

const StyledHello = styled.h1`
    ${font({lineHeight: 1.2, weight: 600, Fmax: 50, Fmin: 32})};
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    letter-spacing: -1px;
    white-space: wrap;
    
`

const PhotoWrapper = styled.div`
    ${fluidSize({ minWidth:270, maxWidth:360, minHeight: 270, maxHeight: 360 })};
    aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 8px;
    background: linear-gradient(to right, #E70FAA, #00C0FD);
    position: relative;
    z-index: 1;

    @media ${theme.media.tablet} {
        display: flex;  
        margin-top: 60px;
        padding: 5px;
    }
    
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200%;
        height: 200%;
        z-index: -1;
        
        background-image: url("${abstract}");
        background-size: cover;
        background-position: center;
        
        @media ${theme.media.mobile} {
            display: none;
        }
    }
    
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`
