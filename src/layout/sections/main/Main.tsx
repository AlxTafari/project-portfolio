import styled from "styled-components";
import photo from "../../../assets/img/prj6.webp"
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {GradientText} from "../../../components/gradientText/GradientText.tsx";
import abstract from "../../../assets/img/abstract.svg";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"} >
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
    display: flex;
    align-items: start;
    flex-direction: column;
    line-height: 70px;
    letter-spacing: -1px;
    font-size: 58px;

    @media ${theme.media.tablet} {
        font-size: 48px;
        margin-top: 40px;
        line-height: 50px;
    }
    
    
`

const PhotoWrapper = styled.div`
    width: 350px;
    height: 350px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 8px;
    background: linear-gradient(to right, #E70FAA, #00C0FD);
    position: relative;
    z-index: 1;

    @media ${theme.media.tablet} {
        width: 300px;
        height: 300px;
        margin-top: 40px;
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
    //background: linear-gradient(to right, #E70FAA, #00C0FD);
    //box-sizing: border-box;

`
//
// const PhotoWrapper = styled.div`
//
//     position: relative;
//     z-index: 0;
//
//     &::before {
//         content: '';
//         position: absolute;
//         height: 444px;
//         width: 444px;
//         border: 1px solid red;
//         z-index: -1;
//         transform: rotate(30deg);
//     }`
