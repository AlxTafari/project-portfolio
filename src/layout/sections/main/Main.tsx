import styled from "styled-components";
import photo from "../../../assets/img/prj6.webp"
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {GradientText} from "../../../components/gradientText/GradientText.tsx";
import abstract from "../../../assets/img/abstract.svg";
import {theme} from "../../../styles/Theme.ts";
import {fluidSize, font} from "../../../styles/Common.ts";
import Typewriter from 'typewriter-effect';


export const Main = () => {
    return (
        <StyledMain id="home">
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} >
                    <StyledHello>
                        <span>Hi 👋,</span>
                        <span>My name is</span>
                        <GradientText>Alexander</GradientText>
                        <p>I am Web Developer</p>
                        <Typewriter
                            options={{
                                strings: ['I am Web Developer', 'A Frontend Developer ', 'Безработный'],
                                delay: "natural",
                                autoStart: true,
                                loop: true,
                            }}/>

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
    
    ${FlexWrapper} {
        @media ${theme.media.tablet} {
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
        }
    }
    
`

const StyledHello = styled.h1`
    ${font({lineHeight: 1.2, weight: 600, Fmax: 50, Fmin: 32})};
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    letter-spacing: -1px;
    white-space: wrap;
    
    span {
        white-space: nowrap;
    }
    p {
        display: none;
    }
`

const PhotoWrapper = styled.div`
    ${fluidSize({ minWidth:270, maxWidth:360, minHeight: 270, maxHeight: 360 })};
    aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 8px;
    position: relative;
    z-index: 1;
    
    @media ${theme.media.tablet} {
        margin: 0 auto;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        padding: 8px;
        background: conic-gradient(
                from 0deg,
                #E70FAA,
                #00C0FD,
                #E70FAA
        ); /* Конический градиент — делает круговой эффект */
        animation: spin 4s linear infinite;
        z-index: -1;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

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
        
        @media ${theme.media.tablet} {
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
