import styled from "styled-components";
import photo from "../../../assets/img/prj6.webp"
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {GradientText} from "../../../components/gradientText/GradientText.tsx";
import {Framed} from "../../../components/framed/Framed.tsx";
export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledHello>
                        <span>Hi 👋,</span>
                        <span>My name is</span>
                        <GradientText>Alexander</GradientText>
                        <span>I am Web Developer</span>
                    </StyledHello>
                    <Framed>
                        <Photo src={photo}/>
                    </Framed>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    overflow: hidden;

`

const StyledHello = styled.h1`
    display: flex;
    align-items: start;
    flex-direction: column;
    line-height: 70px;
    letter-spacing: -1px;
    font-size: 58px;
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    padding: 8px;
    background: linear-gradient(to right, #E70FAA, #00C0FD);
    box-sizing: border-box;

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
